import {FollowingCardDiv} from "@/component/main/userAside/userAside.style";
import Image from "next/image";
import mentorImg from "@/img/img_profile-image-1.png"
import unfollowIc from "@/img/ic_unfollow.png"

interface propsType {
  data: any
}
const FollowingCard = ({data}: propsType) => {
  const mentorData: any = data;

  return (
    <FollowingCardDiv>
      <Image src={mentorImg} alt="profileImg" width={35} height={35} style={{borderRadius: 9}}/>
      <div className="content">
        <div className="wrapper">
          <div className="title">{"닉네임"}</div>
          <div className="line"></div>
          <div className="textStyle">{"백엔드"}</div>
        </div>
        <p className="techStack">
          {"Java"}<span/>
          {"Spring Boot"}<span/>
          {"typescript"}<span/>
          {"AWSsssssssssssssssssssssssss"}<span/>
        </p>
      </div>
      <Image src={unfollowIc} alt="unfollow" className="unfollowBtn" width={16} height={16}/>
    </FollowingCardDiv>
  );
};
export default FollowingCard;