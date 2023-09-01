import {ProfileBtnContainerDiv} from "@/component/main/mentorProfileSection/profileCard.style";
import IcQuestion from "@/img/ic_send-question.svg";
import IcFollow from "@/img/ic_follow.svg";
import {useRecoilValue} from "recoil";
import {userState} from "@/states/state";
import {authedTokenAxios, refreshTokenAPI} from "@/lib/jwt";
import {useSession} from "next-auth/react";

interface propsType {
  nickname: string,
}
const ProfileBtnGroup = ({nickname}: propsType) => {
  const user = useRecoilValue(userState);
  const mentorNickname = nickname;
  const {data: sessionData, update: sessionUpdate} =useSession();
  const followMentorAxios = async (sessionData: any, userName: string, mentorName: string) => {
    try {
      await authedTokenAxios(sessionData.accessToken)
        .get(`${process.env.NEXT_PUBLIC_API_URL}/api/main/follow?nickname=${userName}`)
    } catch (error: any) {
      console.log(`${error.response?.data?.code}: ${error.response?.data?.message}`)
      refreshTokenAPI(sessionData, sessionUpdate).then()
    }
  };
  const onClickFollow = () => {
    //followMentorAxios(sessionData, user.name!, mentorNickname).then();
    console.log(user.name, mentorNickname)
  };

  return (
    <ProfileBtnContainerDiv className="column marginL83">
      <div className="btnQuestion">
        <div className="icBoxQuestion"><IcQuestion/></div>질문하기
      </div>
      <div className="btnFollow" onClick={() => onClickFollow()}>
        <div className="icBoxFollow"><IcFollow/></div>팔로우하기
      </div>
    </ProfileBtnContainerDiv>
  );
};
export default ProfileBtnGroup;