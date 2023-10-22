import {FollowCardDiv} from "@/component/follows/followCard/followCard.style";
import unfollowIc from "@/img/ic_unfollow.png"
import followIc from "@/img/ic_follow.png"
import JobIc from "@/img/ic_job.svg"
import SchoolIc from "@/img/ic_school.svg"
import Image from "next/image";
import {useEffect, useState} from "react";
import {authedTokenAxios, refreshTokenAPI} from "@/lib/jwt";
import {useSession} from "next-auth/react";
import {useRecoilValue} from "recoil";
import {userState} from "@/states/stateUser";
import {useRouter} from "next/router";

interface dataType {
  profileData: any,
  recentAnswerList: any,
  followers: number,
  answers: number,
}
const FollowCard = ({profileData, recentAnswerList, followers, answers}: dataType) => {
  const userName = useRecoilValue(userState).name;
  const [src, setSrc] = useState(unfollowIc);
  const [isFollow, setIsFollow] = useState<boolean>(true);
  const [lastAnswerList, setLastAnswerList] = useState<string[]>();
  const [techStackList, setTechStackList] = useState<string[]>();
  const {data: sessionData, update: sessionUpdate} = useSession();
  const router =useRouter();
  const onClickUnfollowBtn = async (sessionData: any, userName: string, mentorName: string) => {
    try {
      const result = await authedTokenAxios(sessionData.accessToken)
        .post(`${process.env.NEXT_PUBLIC_API_URL}/api/follow/request`, {
          userNickname: userName,
          followNickname: mentorName,
        })
      if (result.data.message === "팔로우가 정상적으로 생성되었습니다") {
        setIsFollow(true);
      } else {
        setIsFollow(false);
      }
    } catch (error: any) {
      console.log(`${error.response?.data?.code}: ${error.response?.data?.message}`)
      refreshTokenAPI(sessionData, sessionUpdate).then()
    }
  };

  const onClickMoreInfoBtn = (nickname: string) => {
    router.push(`/profile/${nickname}`).then()
  };

  useEffect(() => {
    setTechStackList(profileData.techStack.split(", "))
    setLastAnswerList(recentAnswerList)
    if (recentAnswerList.length > 1) {
      setLastAnswerList(recentAnswerList)
    } else if (recentAnswerList.length === 0) {
      setLastAnswerList(["아직 답변한 질문이 없습니다"])
    } else {
      const list = [recentAnswerList]
      setLastAnswerList(list)
    }
  }, [recentAnswerList, profileData.techStack]);

  useEffect(() => {
    if(isFollow) setSrc(unfollowIc)
    else setSrc(followIc)
  }, [isFollow])

  return (
    <FollowCardDiv>
      <div className="cardWrap">
        <Image
          src={src}
          alt="icon"
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
              <p className="highlightedColor">멘티 {followers}명</p>
              <p className="normalColor">답변 {answers}개</p>
            </div>
          </div>
        </div>
        <div className="container containerJob">
          <JobIc/>
          <div className="wrap">
            <div className="line-wrap">
              <p>{profileData.company}</p>
              <div className="line"/>
              <p>{profileData.field}</p>
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
            <p>{profileData.school}</p>
            <div className="line"/>
            <p>{profileData.major} 전공</p>
          </div>
        </div>
        <div className="hr"/>
        <div className="container containerQuestion">
          <p className="titleText normalColor">최근 답변한 질문</p>
          {
            lastAnswerList && lastAnswerList.map((data, index) => {
              return (
                <p key={index} className="ellipsis">{data}</p>
              )
            })
          }
        </div>
      </div>
      <div className="container containerBtnGroup">
        <button className="chatBtn">채팅하기</button>
        <button className="moreBtn" onClick={() => onClickMoreInfoBtn(profileData.nickname)}>프로필 더보기</button>
      </div>

    </FollowCardDiv>
  );
};
export default FollowCard;