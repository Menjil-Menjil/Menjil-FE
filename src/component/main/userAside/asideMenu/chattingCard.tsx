import {ChattingCardDiv} from "@/component/main/userAside/userAside.style";
import Image from "next/image";
import {useEffect, useState} from "react";

interface propsType {
  data: any
  index: number
}
const ChattingCard = ({data, index}: propsType) => {
  const cardData: any = data;
  const cardIndex: number = index;
  const [lineStyle, setLineStyle] = useState<any>();
  useEffect(() => {
    if (cardIndex > 1) setLineStyle({border: "none"})
  }, [cardIndex]);

  return (
    <ChattingCardDiv style={lineStyle}>
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