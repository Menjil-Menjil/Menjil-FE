import {ChatLogCardDiv} from "@/component/main/userAside/userAside.style";
import Image from "next/image";

interface propsType {
  data: any
}

const DAY_HOUR = 24;
const ONE_HOUR = 1;
const HIGHLIGHTED_MIN_HOUR = 2;

const ChattingCard = ({data}: propsType) => {
  const cardData: any = data;
  const cardDate = new Date(data.lastMessageTime);
  const today = new Date();
  const diffSec = today.getTime() - cardDate.getTime();
  const diffDate = Math.floor(diffSec / (24 * 60 * 60 * 1000));
  const diffHour = Math.floor(diffSec / (60 * 60 * 1000));
  const diffMin = Math.floor(diffSec / (60 * 1000));

  return (
    <ChatLogCardDiv>
      <div className="mentorImgBox">
        <Image src={cardData.imgUrl} alt="img" fill sizes="10vw" style={{objectFit: "cover"}}/>
      </div>
      <div>
        <div className="spaceBetween">
          <div className="titleStyle">
            {cardData.nickname}
          </div>
          {diffHour < HIGHLIGHTED_MIN_HOUR ?
            <div className="wrapper">
              <div className="timeText timeTextColor">
                {diffHour < ONE_HOUR ?
                  `${diffMin}분 전` :
                  `${diffHour}시간 전`
                }
              </div>
              <div className="circle"></div>
            </div> :
            <div className="timeText">
              {diffHour < DAY_HOUR ?
                `${diffHour}시간 전` :
                `${diffDate}일 전`
              }
            </div>
          }
        </div>
        <p className="textStyle ellipsis">
          {cardData.lastMessage}
        </p>
      </div>
    </ChatLogCardDiv>
  );
};

export default ChattingCard;