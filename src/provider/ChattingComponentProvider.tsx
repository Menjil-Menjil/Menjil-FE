import ChattingComponentContext from "@/context/chattingComponentContext";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "@/states/stateUser";
import {
  chatMessagesState,
  nowSubscribeState,
  ISubscribe,
} from "@/states/stateSubscribe";

const ChattingComponentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectIndex, setSelectIndex] = useState<any>(); //선택된 인덱스
  const [chattingMentor, setChattingMentor] = useRecoilState(nowSubscribeState);
  const [messagesLog, setMessagesLog] = useRecoilState(chatMessagesState); //메세지들

  const user = useRecoilValue(userState);

  const enterChattingRoom = async (room: ISubscribe) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/chat/room/enter/`,
        {
          menteeNickname: user.name,
          mentorNickname: room.nickname,
          roomId: room.roomId,
        }
      );
    } catch (e: any) {
      console.log(e);
    }
  };

  // 채팅방 목록에서 이동
  const moveChattingRoom = (room: ISubscribe) => {
    setMessagesLog(() => []);
    enterChattingRoom(room);
  };

  useEffect(() => {
    if (chattingMentor.roomId !== "") {
      setSelectIndex(() => chattingMentor.roomId);
    }
  }, [chattingMentor]);

  return (
    <ChattingComponentContext.Provider
      value={{
        moveChattingRoom,
        enterChattingRoom,
        selectIndex,
        setSelectIndex,
      }}
    >
      {children}
    </ChattingComponentContext.Provider>
  );
};

export default ChattingComponentProvider;
