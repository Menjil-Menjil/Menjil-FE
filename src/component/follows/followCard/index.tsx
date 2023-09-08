import {FollowCardDiv} from "@/component/follows/followCard/followCard.style";
import unfollowIc from "@/img/ic_unfollow.png"
import JobIc from "@/img/ic_job.svg"
import SchoolIc from "@/img/ic_school.svg"
import Image from "next/image";
import {useEffect, useState} from "react";
import {authedTokenAxios, refreshTokenAPI} from "@/lib/jwt";
import {useSession} from "next-auth/react";
import {useRecoilState, useRecoilValue} from "recoil";
import {userState} from "@/states/stateUser";
import {followEventState} from "@/states/stateMain";

interface dataType {
  profileData: any,
  lastAnswerList: any,
}
const FollowCard = ({profileData, lastAnswerList}: dataType) => {
  const userName = useRecoilValue(userState).name;
  const [, setFollowEvent] = useRecoilState(followEventState);
  const [techStackList, setTechStackList] = useState<string[]>();
  const {data: sessionData, update: sessionUpdate} =useSession();
  const onClickUnfollowBtn = async (sessionData: any, userName: string, mentorName: string) => {
    try {
      await authedTokenAxios(sessionData.accessToken)
        .post(`${process.env.NEXT_PUBLIC_API_URL}/api/follow/request`, {
          userNickname: userName,
          followNickname: mentorName,
        })
      setFollowEvent({followEvent: true})
    } catch (error: any) {
      console.log(`${error.response?.data?.code}: ${error.response?.data?.message}`)
      refreshTokenAPI(sessionData, sessionUpdate).then()
    }
  };

  useEffect(() => {
    setTechStackList(profileData.techStack.split(", "))
  }, [profileData.techStack]);

  return (
    <FollowCardDiv>
      <div className="cardWrap">
        <Image src={unfollowIc} alt="unfollow"
               width={24} height={24}
               className="unfollowBtn"
               onClick={() => onClickUnfollowBtn(sessionData, userName!, profileData.nickname)}/>
        <div className="container containerTitle">
          <Image src={profileData.imgUrl} alt="profile" width={50} height={50} style={{
            borderRadius: "12px",
            objectFit: "cover"
          }}/>
          <div>
            <p className="titleText">{profileData.nickname}</p>
            <div className="wrap">
              <p className="highlightedColor">멘티 23명</p>
              <p className="normalColor">답변 26개</p>
            </div>
          </div>
        </div>
        <div className="container containerJob">
          <JobIc/>
          <div className="wrap">
            <div className="line-wrap">
              <p>{profileData.company}</p>
              <div className="line"/>
              <p>프론트엔드</p>
            </div>
            <div className="line-wrap techStack">
              {techStackList && techStackList.map((data: any, index: number) => {
                if (index < 4) {
                  return (
                    <p key={index} className={`techBox normalColor ${index>2 ? "ellipsis" : ""}`}>
                      {data}<span/>
                    </p>
                  )}
              })}
            </div>
          </div>
        </div>
        <div className="container containerSchool">
          <SchoolIc/>
          <div className="wrap">
            <p>서울과학기술대학교</p>
            <div className="line"/>
            <p>컴퓨터공학 전공</p>
          </div>
        </div>
        <div className="hr"/>
        <div className="container containerQuestion">
          <p className="titleText normalColor">최근 답변한 질문</p>
          <p>자소서에 다른 직무 유형은 어떻게 작성하면 좋을까요?</p>
          <p>입사 후 포부 문항 작성 요령이 궁금합니다.</p>
        </div>
      </div>
      <div className="container containerBtnGroup">
        <button className="chatBtn">채팅하기</button>
        <button className="moreBtn">프로필 더보기</button>
      </div>

    </FollowCardDiv>
  );
};
export default FollowCard;