import {ProfileBtnContainerDiv} from "@/component/main/mentorProfileList/profileCard.style";
import IcQuestion from "@/img/ic_send-question.svg";
import IcFollow from "@/img/ic_follow.svg";
const ProfileBtnGroup = () => {
  return (
    <ProfileBtnContainerDiv className="column">
      <div className="btnQuestion">
        <div className="icBoxQuestion"><IcQuestion/></div>질문하기
      </div>
      <div className="btnFollow">
        <div className="icBoxFollow"><IcFollow/></div>팔로우하기
      </div>
    </ProfileBtnContainerDiv>
  );
};
export default ProfileBtnGroup;