import {ChattingCardDiv} from "@/component/main/userAside/userAside.style";
import Image from "next/image";

interface propsType {
  data: any
}
const ChattingCard = ({data}: propsType) => {
  const cardData: any = data;

  return (
    <ChattingCardDiv>
      <div className="mentorImgBox">
        <Image src={cardData.imgUrl} alt="img" fill sizes="50vw" style={{objectFit: "cover"}}/>
      </div>
      <div>
        <div className="spaceBetween">
          <div className="titleStyle">
            {cardData.nickname}
          </div>
          {cardData.lastMessagedTimeOfHour < 2 ?
            <div className="wrapper">
              <div className="timeText timeTextColor">
                {cardData.lastMessagedTimeOfHour}시간 전
              </div>
              <div className="circle"></div>
            </div> :
            <div className="timeText">
              {cardData.lastMessagedTimeOfHour < 24 ?
                `${cardData.lastMessagedTimeOfHour}시간 전` :
                `${Math.floor(cardData.lastMessagedTimeOfHour / 24)}일 전`
              }
            </div>
          }
        </div>
        <p className="textStyle ellipsis">
          {cardData.lastMessage}
        </p>
      </div>
    </ChattingCardDiv>
  );
};

export default ChattingCard;