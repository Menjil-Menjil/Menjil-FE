import { ChatLogCardDiv } from "@/component/main/userAside/userAside.style";
import { authedTokenAxios, refreshTokenAPI } from "@/lib/jwt";
import { mentoringState } from "@/states/stateMain";
import {
  subscribeState,
  nowSubscribeState,
  ISubscribe,
} from "@/states/stateSubscribe";
import { userState } from "@/states/stateUser";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";

interface propsType {
  data: any;
}

const DAY_HOUR = 24;
const ONE_HOUR = 1;
const HIGHLIGHTED_MIN_HOUR = 2;

const ChattingCard = ({ data }: propsType) => {
  const chattingData: any = data;
  const cardDate = new Date(data.lastMessageTime);
  const today = new Date();
  const diffSec = today.getTime() - cardDate.getTime();
  const diffDate = Math.floor(diffSec / (24 * 60 * 60 * 1000));
  const diffHour = Math.floor(diffSec / (60 * 60 * 1000));
  const diffMin = Math.floor(diffSec / (60 * 1000));
  const [mentoring, setMentoring] = useRecoilState(mentoringState);
  const [chattingMentor, setChattingMentor] = useRecoilState(nowSubscribeState);
  const user = useRecoilValue(userState);
  const router = useRouter();
  const { data: sessionData, update: sessionUpdate } = useSession();

  const moveChattingMentor = async () => {
    if (!!user.name && !!chattingData.nickname) {
      const moveRoom: ISubscribe = {
        roomId: chattingData.roomId,
        imgUrl: chattingData.imgUrl,
        nickname: chattingData.nickname,
        lastMessage: "",
        lastMessageTime: "",
      };

      setMentoring({ mentor: chattingData.nickname, mentee: user.name });
      setChattingMentor(moveRoom);

      try {
        const res = await authedTokenAxios(sessionData?.accessToken).post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/chat/room/enter`,
          {
            menteeNickname: user.name,
            mentorNickname: chattingData.nickname,
            roomId: chattingData.roomId,
          }
        );
        // .then((res) => {});
      } catch (error: any) {
        console.log(
          `${error.response?.data?.code}: ${error.response?.data?.message}`
        );
        refreshTokenAPI(sessionData, sessionUpdate).then();
      }

      router
        .push({
          pathname: "/chatting",
          //query: {mentor: mentorNickname}
        })
        .then();
    }
  };

  return (
    <ChatLogCardDiv onClick={moveChattingMentor}>
      <div className="mentorImgBox">
        <Image
          src={chattingData.imgUrl}
          alt="img"
          fill
          sizes="10vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div>
        <div className="spaceBetween">
          <div className="titleStyle">{chattingData.nickname}</div>
          {diffHour < HIGHLIGHTED_MIN_HOUR ? (
            <div className="wrapper">
              <div className="timeText timeTextColor">
                {diffHour < ONE_HOUR ? `${diffMin}분 전` : `${diffHour}시간 전`}
              </div>
              <div className="circle"></div>
            </div>
          ) : (
            <div className="timeText">
              {diffHour < DAY_HOUR ? `${diffHour}시간 전` : `${diffDate}일 전`}
            </div>
          )}
        </div>
        <p
          className={`textStyle ${
            diffHour < ONE_HOUR ? "newChatTextStyle" : "oldChatTextStyle"
          } ellipsis`}
        >
          {chattingData.lastMessage}
        </p>
      </div>
    </ChatLogCardDiv>
  );
};

export default ChattingCard;
