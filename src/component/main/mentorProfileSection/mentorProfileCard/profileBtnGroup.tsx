import {ProfileBtnContainerDiv} from "@/component/main/mentorProfileSection/profileCard.style";
import IcQuestion from "@/img/ic_send-question.svg";
import IcFollow from "@/img/ic_follow.svg";
import {useRecoilState, useRecoilValue} from "recoil";
import {userState} from "@/states/stateUser";
import {authedTokenAxios, refreshTokenAPI} from "@/lib/jwt";
import {useSession} from "next-auth/react";
import {mentoringState} from "@/states/stateMain";
import { useRouter } from 'next/router';

interface propsType {
  nickname: string,
}
const ProfileBtnGroup = ({nickname}: propsType) => {
  const user = useRecoilValue(userState);
  const [mentoring, setMentoring] = useRecoilState(mentoringState);
  const mentorNickname = nickname;
  const {data: sessionData, update: sessionUpdate} =useSession();
  const router = useRouter();

  const followMentorAxios = async (sessionData: any, userName: string, mentorName: string) => {
    try {
      await authedTokenAxios(sessionData.accessToken)
        .get(`${process.env.NEXT_PUBLIC_API_URL}/api/main/follow?nickname=${userName}`)
    } catch (error: any) {
      console.log(`${error.response?.data?.code}: ${error.response?.data?.message}`)
      refreshTokenAPI(sessionData, sessionUpdate).then()
    }
  };
  const onClickQuestion = () => {
    setMentoring({mentor: mentorNickname, mentee: user.name})
    router.push({
      pathname: '/chatting',
      //query: {mentor: mentorNickname}
    }).then()
    console.log("질문!", mentoring)
  }
  const onClickFollow = () => {
    //followMentorAxios(sessionData, user.name!, mentorNickname).then();
    console.log("팔로우!", user.name, mentorNickname)
  };

  return (
    <ProfileBtnContainerDiv className="column marginL83">
      <div className="btnQuestion" onClick={() => onClickQuestion()}>
        <div className="icBoxQuestion"><IcQuestion/></div>질문하기
      </div>
      <div className="btnFollow" onClick={() => onClickFollow()}>
        <div className="icBoxFollow"><IcFollow/></div>팔로우하기
      </div>
    </ProfileBtnContainerDiv>
  );
};
export default ProfileBtnGroup;