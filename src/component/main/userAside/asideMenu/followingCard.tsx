import {AsideListCardDiv} from "@/component/main/userAside/userAside.style";
import Image from "next/image";
import mentorImg from "@/img/img_profile-image-1.png"

interface propsType {
  data: any
}
const FollowingCard = ({data}: propsType) => {
  const mentorData: any = data;

  return (
    <AsideListCardDiv>
      <div className="mentorImgBox">
        <Image src={mentorImg} alt="img" fill sizes="10vw" style={{objectFit: "cover"}}/>
      </div>
      <div>
        <div className="spaceBetween">
          <div className="titleStyle">
            {"닉네임"}
          </div>
        </div>
        <p className="textStyle">
          {"네이버 클라우드 | 백엔드"}
        </p>
        <p className="techStyle">
          {"Java" + " " + "Spring Boot" + " " + "typescript" + " " + "AWS"}
        </p>
      </div>
    </AsideListCardDiv>
  );
};
export default FollowingCard;