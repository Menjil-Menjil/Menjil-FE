import {ChattingCardDiv} from "@/component/main/userAside/userAside.style";
import Image from "next/image";
import profileImg from "@/img/img_chatting-card.png"

const ChattingCard = () => {
  return (
    <ChattingCardDiv>
      <Image src={profileImg} alt="img" width={60} height={68}/>
      <div>
        <div className="spaceBetween">
          <div className="titleStyle">
            {"김형진 멘토"}
          </div>
          <div className="timeText">
            {"1시간 전"}
          </div>
        </div>
        <p className="textStyle ellipsis">
          {"답변내용 2줄 까지) 안녕하세요? 다람쥐 헌 쳇바퀴에 타고파 배고파 고라파덕"}
        </p>
      </div>
    </ChattingCardDiv>
  );
};

export default ChattingCard;