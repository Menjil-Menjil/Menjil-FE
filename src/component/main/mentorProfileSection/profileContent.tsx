import Image from "next/image";
import profileImg1 from "@/img/img_profile-image-1.png";
import profileImg2 from "@/img/img_profile-image-2.png";
import {ProfileContentContainerDiv} from "@/component/main/mentorProfileSection/profileCard.style";

const ProfileContent = () => {
  return (
    <ProfileContentContainerDiv>
      <div className="profileImageBox center">
        <Image src={profileImg2} alt="profileImage"/>
      </div>
      <div className="profileContentBox column gap3">
        <div className="marginLeft center gap10">
          <div className="textStyleNickname">{"홍길동"}</div>
          <div className="line"/>
          <div>{"컴퓨터공학 전공"}</div>
        </div>
        <div className="marginBottom profileJobBox center">{"네이버 클라우드"}</div>
        <div className="marginLeft">{"프론트엔드"}</div>
        <div className="center gap12 textStyleTech marginLeft">
          <div>{"React"}</div>
          <div>{"NEXT.JS"}</div>
          <div>{"GitHub"}</div>
          <div>{"Redux"}</div>
        </div>
      </div>
    </ProfileContentContainerDiv>
  );
}
export default ProfileContent;