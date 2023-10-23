import { useRouter } from "next/router";
import styled from "@emotion/styled";
import {
  ProfileBox,
  ProfileContentBox,
} from "@/component/profile/[nickname].style";
import Image from "next/image";
import SendQuestionIc from "@/img/ic_send-question.svg";
import { useRecoilValue, useRecoilState } from "recoil";
import { userState } from "@/states/stateUser";
import { authedTokenAxios, refreshTokenAPI } from "@/lib/jwt";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import ProfileAnswers from "@/component/profile/profileAnswers";
import ProfileCareer from "@/component/profile/profileCareer";
import unfollowIc from "@/img/ic_unfollow.png";
import followIc from "@/img/ic_follow.png";
import { mentoringState } from "@/states/stateMain";
import {
  subscribeState,
  nowSubscribeState,
  ISubscribe,
} from "@/states/stateSubscribe";

export const ProfileContainerDiv = styled.div`
  width: 1300px;
  min-height: 600px;
  margin: 68px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

interface RadioElementType {
  children: any;
  value: string;
  defaultChecked: boolean;
  onChange: any;
}
const Radio = ({
  children,
  value,
  defaultChecked,
  onChange,
}: RadioElementType) => {
  return (
    <>
      <input
        id={value}
        type="radio"
        name="menu"
        value={value}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      <label htmlFor={value}>{children}</label>
    </>
  );
};

const Profile = () => {
  const router = useRouter();
  const profileNickname = router.query.nickname!;
  const userName = useRecoilValue(userState).name;
  const { data: sessionData, update: sessionUpdate } = useSession();
  const [profileDto, setProfileDto] = useState<any>();
  const [answerCount, setAnswerCount] = useState<number>();
  const [answerDataList, setAnswerDataList] = useState<any[]>([]);
  const [menuComponent, setMenuComponent] = useState<string>("answers");
  const [isFollow, setIsFollow] = useState<boolean>(true);
  const [src, setSrc] = useState(unfollowIc);
  const [mentoring, setMentoring] = useRecoilState(mentoringState);
  const [chattingMentor, setChattingMentor] = useRecoilState(nowSubscribeState);
  const user = useRecoilValue(userState);

  const handleMenuChange = (e: any) => {
    setMenuComponent(e.target.value);
  };
  const myMentorAxios = async (
    sessionData: any,
    userName: any,
    profileName: any
  ) => {
    try {
      const response = await authedTokenAxios(sessionData.accessToken).get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/following/info?nickname=${userName}&followNickname=${profileName}`
      );
      return response.data;
    } catch (error: any) {
      console.log(
        `${error.response?.data?.code}: ${error.response?.data?.message}`
      );
      refreshTokenAPI(sessionData, sessionUpdate).then();
    }
  };
  const onClickUnfollowBtn = async (
    sessionData: any,
    userName: string,
    mentorName: any
  ) => {
    try {
      const result = await authedTokenAxios(sessionData.accessToken).post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/follow/request`,
        {
          userNickname: userName,
          followNickname: mentorName,
        }
      );
      if (result.data.message === "팔로우가 정상적으로 생성되었습니다") {
        setIsFollow(true);
      } else {
        setIsFollow(false);
      }
    } catch (error: any) {
      console.log(
        `${error.response?.data?.code}: ${error.response?.data?.message}`
      );
      refreshTokenAPI(sessionData, sessionUpdate).then();
    }
  };

  useEffect(() => {
    myMentorAxios(sessionData, userName, profileNickname).then((result) => {
      setProfileDto(result.data.followingUserInfoDto);
      setAnswerCount(result.data.answersCount);
      setAnswerDataList(result.data.answers);
    });
  }, [profileNickname, sessionData, userName]);

  useEffect(() => {
    if (isFollow) setSrc(unfollowIc);
    else setSrc(followIc);
  }, [isFollow]);

  // const moveChattingMentor = async () => {
  //   if (!!user.name && !!profileNickname) {
  //     const moveRoom: ISubscribe = {
  //       roomId: chattingData.roomId,
  //       imgUrl: chattingData.imgUrl,
  //       nickname: profileNickname,
  //       lastMessage: "",
  //       lastMessageTime: "",
  //     };

  //     setMentoring({ mentor: profileNickname, mentee: user.name });
  //     setChattingMentor(moveRoom);

  //     try {
  //       const res = await authedTokenAxios(sessionData?.accessToken).post(
  //         `${process.env.NEXT_PUBLIC_API_URL}/api/chat/room/enter`,
  //         {
  //           menteeNickname: user.name,
  //           mentorNickname: profileNickname,
  //           roomId: chattingData.roomId,
  //         }
  //       );
  //       // .then((res) => {});
  //     } catch (error: any) {
  //       console.log(
  //         `${error.response?.data?.code}: ${error.response?.data?.message}`
  //       );
  //       refreshTokenAPI(sessionData, sessionUpdate).then();
  //     }

  //     router
  //       .push({
  //         pathname: "/chatting",
  //         //query: {mentor: mentorNickname}
  //       })
  //       .then();
  //   }
  // };

  return (
    <ProfileContainerDiv>
      <ProfileBox>
        {profileDto && (
          <ProfileContentBox>
            <div className="profileInfo">
              <Image
                src={profileDto.imgUrl}
                alt={"profile"}
                width={80}
                height={80}
                priority={true}
                style={{
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
              <div className="wrap">
                <div className="titleWrap">
                  <div className="role">{"멘토"}</div>
                  <p className="nickname">{profileNickname}</p>
                  <button className="button emphasisColor">
                    <SendQuestionIc />
                    채팅하기
                  </button>
                  <button
                    className="button"
                    onClick={() =>
                      onClickUnfollowBtn(
                        sessionData,
                        userName!,
                        profileNickname
                      )
                    }
                  >
                    <Image src={src} alt="follow" width={21} height={21} />
                    관심멘토
                  </button>
                </div>
                <div className="contentWrap">
                  <div className="answers wrap">
                    작성답변
                    <div className="count">{answerCount}</div>
                  </div>
                  <div className="likes wrap">
                    추천답변
                    <div className="count">0</div>
                  </div>
                  <div className="reviews wrap">
                    멘토링 후기
                    <div>답변이 상세하고 친절해요</div>
                    <div>현실적인 부분을 정확히 알려줘요</div>
                  </div>
                  <div className="skillInfo">
                    <div className="skillBox">
                      직장・직군
                      <div className="data emphasis">{profileDto.company}</div>
                      <div className="data">{profileDto.field}</div>
                    </div>
                    <div className="skillBox">
                      학력・전공
                      <div className="data emphasis">{profileDto.school}</div>
                      <div className="data">
                        <div className="majorTag">주</div>
                        {profileDto.major}
                      </div>
                      {profileDto.subMajor && (
                        <div className="data">
                          <div className="majorTag">복수</div>
                          {profileDto.subMajor}
                        </div>
                      )}
                      {profileDto.minor && (
                        <div className="data">
                          <div className="majorTag">부</div>
                          {profileDto.minor}
                        </div>
                      )}
                    </div>
                    <div className="skillBox">
                      기술스택
                      <div className="data techData">
                        {profileDto.techStack
                          .split(", ")
                          .map((data: string, index: number) => {
                            return (
                              <div key={index} className="techStack">
                                {data}
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="btnGroup">
              <Radio value="answers" defaultChecked onChange={handleMenuChange}>
                작성 답변
              </Radio>
              <Radio
                value="career"
                defaultChecked={false}
                onChange={handleMenuChange}
              >
                경력
              </Radio>
              <Radio
                value="certificate"
                defaultChecked={false}
                onChange={handleMenuChange}
              >
                자격증
              </Radio>
              <Radio
                value="awards"
                defaultChecked={false}
                onChange={handleMenuChange}
              >
                수상내역
              </Radio>
              <Radio
                value="activity"
                defaultChecked={false}
                onChange={handleMenuChange}
              >
                대외활동
              </Radio>
            </div>
          </ProfileContentBox>
        )}
        {menuComponent === "answers" && (
          <ProfileAnswers answerList={answerDataList} />
        )}
        {menuComponent === "career" && (
          <ProfileCareer
            careerData={
              profileDto.career
                ? profileDto.career
                : "Shopby 라인업 유지보수 및 레거시 환경 개선, Shopby Pro Modern Skin 신규 스킨 개발, Shopby Pro Skin 기본 스킨 개발(Another 스킨), Shopby Pro Admin 회원・운영 개발"
            }
            title={profileDto.company}
            subtitle={profileDto.field}
          />
        )}
        {menuComponent === "certificate" && <>{profileDto.certificate}</>}
        {menuComponent === "awards" && <>{profileDto.awards}</>}
        {menuComponent === "activity" && (
          <ProfileCareer
            careerData={
              profileDto.activity
                ? profileDto.activity
                : "디프만 10기 (디프만 - IT 연합동아리), 우아한 테크 캠프 4기 (우아한형제들), SW마에스트로 11기 (과학기술정보통신부 주관), NOA(Network Of All) (하드웨어 및 소프트웨어 융합 교내 동아리)"
            }
            title="디프만 10기"
            subtitle="IT 연합동아리"
          />
        )}
      </ProfileBox>
    </ProfileContainerDiv>
  );
};
export default Profile;
