import {useRouter} from "next/router";
import styled from "@emotion/styled";
import {ProfileBox, ProfileContentBox} from "@/component/follows/[nickname].style";
import Image from "next/image";
import SendQuestionIc from "@/img/ic_send-question.svg"
import followIc from "@/img/ic_follow.png"
import {useRecoilValue} from "recoil";
import {userState} from "@/states/stateUser";
import {authedTokenAxios, refreshTokenAPI} from "@/lib/jwt";
import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import ProfileAnswers from "@/component/follows/profileAnswers";

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
  children: any,
  value: string,
  defaultChecked: boolean,
  onChange: any
}
const Radio = ({ children, value, defaultChecked, onChange }: RadioElementType) => {
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
      <label htmlFor={value}>
        {children}
      </label>
    </>
  );
}

const Profile = () => {
  const router = useRouter();
  const profileNickname = router.query.nickname!;
  const userName = useRecoilValue(userState).name;
  const {data: sessionData, update: sessionUpdate} = useSession();
  const [profileDto, setProfileDto] = useState<any>();
  const [answerCount, setAnswerCount] = useState<number>();
  const [answerDataList, setAnswerDataList] = useState<any[]>([]);
  const [menuComponent, setMenuComponent] = useState<string>("answers");
  const handleMenuChange = (e: any) => {
    setMenuComponent(e.target.value)
  };
  const myMentorAxios = async (sessionData: any, userName: any, profileName: any) => {
    try {
      const response = await authedTokenAxios(sessionData.accessToken)
        .get(`${process.env.NEXT_PUBLIC_API_URL}/api/following/info?nickname=${userName}&followNickname=${profileName}`)
      return response.data
    } catch (error: any) {
      console.log(`${error.response?.data?.code}: ${error.response?.data?.message}`)
      refreshTokenAPI(sessionData, sessionUpdate).then()
    }
  };

  useEffect(() => {
    myMentorAxios(sessionData, userName, profileNickname).then((result) => {
      setProfileDto(result.data.followingUserInfoDto)
      setAnswerCount(result.data.answersCount)
      setAnswerDataList(result.data.answers)
    })
  }, [profileNickname, sessionData, userName])

  return (
    <ProfileContainerDiv>
      <ProfileBox>
        {profileDto &&
            <ProfileContentBox>
                <div className="profileInfo">
                    <Image src={profileDto.imgUrl} alt={"profile"} width={80} height={80}
                           priority={true}
                           style={{
                             borderRadius: "12px",
                             objectFit: "cover"
                           }}/>
                    <div className="wrap">
                        <div className="titleWrap">
                            <div className="role">{"멘토"}</div>
                            <p className="nickname">{profileNickname}</p>
                            <button className="button emphasisColor">
                                <SendQuestionIc/>
                                채팅하기
                            </button>
                            <button className="button">
                                <Image src={followIc} alt="follow" width={21} height={21}/>
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
                                <div className="skillBox">직장・직군
                                    <div className="data emphasis">
                                      {profileDto.company}
                                    </div>
                                    <div className="data">
                                      {profileDto.field}
                                    </div>
                                </div>
                                <div className="skillBox">학력・전공
                                    <div className="data emphasis">
                                      {profileDto.school}
                                    </div>
                                    <div className="data">
                                      <div className="majorTag">주</div>
                                      {profileDto.major}
                                    </div>
                                  {profileDto.subMajor &&
                                      <div className="data">
                                      <div className="majorTag">복수</div>
                                        {profileDto.subMajor}
                                      </div>
                                  }
                                  {profileDto.minor &&
                                      <div className="data">
                                      <div className="majorTag">부</div>
                                        {profileDto.minor}
                                      </div>
                                  }
                                </div>
                                <div className="skillBox">기술스택
                                    <div className="data techData">
                                      {profileDto.techStack.split(", ").map((data: string, index: number) => {
                                        return (
                                          <div key={index} className="techStack">{data}</div>
                                        )
                                      })}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="btnGroup">
                    <Radio value="answers" defaultChecked onChange={handleMenuChange}>작성 답변</Radio>
                    <Radio value="career" defaultChecked={false} onChange={handleMenuChange}>경력</Radio>
                    <Radio value="certificate" defaultChecked={false} onChange={handleMenuChange}>자격증</Radio>
                    <Radio value="awards" defaultChecked={false} onChange={handleMenuChange}>수상내역</Radio>
                    <Radio value="activity" defaultChecked={false} onChange={handleMenuChange}>대외활동</Radio>
                </div>
            </ProfileContentBox>
        }
        {menuComponent === "answers" && (
          <ProfileAnswers answerList={answerDataList}/>
        )}
        {menuComponent === "career" && (
          <>career</>
        )}
        {menuComponent === "certificate" && (
          <>certificate</>
        )}
        {menuComponent === "awards" && (
          <>awards</>
        )}
        {menuComponent === "activity" && (
          <>activity</>
        )}
      </ProfileBox>
    </ProfileContainerDiv>
  );
};
export default Profile;