import ChattingComponentContext from "@/context/chattingComponentContext";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { Client } from "@stomp/stompjs";
import useDidMountEffect from "@/component/useDidmountEffect";
import { v4 as uuid, v5 } from "uuid";

var client: Client | null = null;

const ChattingComponentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  interface chattingRoomInfo {
    roomId: string;
    mentorProfileImage: any;
    mentorName: any;
    lastMessage: string;
  }
  interface messageInfo {
    message: string;
    messageType: string;
    order: number;
    roomId: any;
    senderNickname: string;
    senderType: string;
    time: any;
    _id: any;
  }

  const [chattingRooms, setChattingRooms] = useState<chattingRoomInfo[]>([]);
  const [chattingMentor, setChattingMentor] = useState<chattingRoomInfo>({
    roomId: "0",
    mentorProfileImage: 0,
    mentorName: 0,
    lastMessage: "",
  }); //멘토 데이터

  const [messageInput, setMessageInput] = useState(""); //보내는 메세지
  const [messagesLog, setMessagesLog] = useState<messageInfo[]>([]); //메세지들
  const [selectIndex, setSelectIndex] = useState<any>(); //선택된 인덱스

  // 채팅방 구독하기
  const subscribe = (roomId: any) => {
    client?.subscribe(`/queue/chat/room/${roomId}`, ({ body }) => {
      JSON.parse(body).body.data.map((message: any) => {
        setMessagesLog((messagesLog) => [...messagesLog, message]);
      });
    });
  };

  const connect = () => {
    (client = new Client({
      brokerURL: `${process.env.NEXT_PUBLIC_STOMP_API_URL}/ws/chat/websocket`,
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    })),
      client.activate();
  };

  const publish = (message: any) => {
    if (!client?.connected) return;
    client?.publish({
      destination: "/pub/chat/message",
      body: JSON.stringify({ roomId: chattingMentor.roomId, message }),
    });
    setMessageInput("");
  };

  const disConnect = () => {
    if (client != null) {
      if (client.connected) client.deactivate();
    }
  };

  const removeAllChatMessages = () => {
    setMessagesLog([]);
  };

  const enterChattingRoom = async (room: chattingRoomInfo) => {
    client?.unsubscribe(`/queue/chat/room/${room.roomId}`);
    subscribe(room.roomId);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/chat/room/enter/`,
        {
          menteeNickname: "hello",
          mentorNickname: room.mentorName,
          roomId: room.roomId,
        }
      );
      // .then((res) => {
      //   setChattingRooms([...chattingRooms, chattingMentor]);
      // });
    } catch (e: any) {
      console.log(e);
    }
    disConnect();
    connect();
  };

  // 채팅방 목록에서 이동
  const moveChattingRoom = (room: chattingRoomInfo) => {
    removeAllChatMessages();
    setChattingMentor(() => room);
    enterChattingRoom(room);
  };

  // 채팅방 신규입장
  const createRoom = async () => {
    const mentee: string = "hello";
    const mentor: string = uuid();
    const randomSeed: string = mentee + "*" + mentor;
    const roomId: string = v5(randomSeed, uuid());

    const newRoom: chattingRoomInfo = {
      roomId: roomId,
      mentorProfileImage: 0,
      mentorName: mentor,
      lastMessage: "",
    };

    removeAllChatMessages();
    setChattingMentor(() => newRoom);

    client?.unsubscribe(`/queue/chat/room/${roomId}`);
    subscribe(roomId);
    try {
      const res = await axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/api/chat/room/enter`, {
          menteeNickname: mentee,
          mentorNickname: mentor,
          roomId: roomId,
        })
        .then((res) => {
          // console.log(res);
          setChattingRooms((chattingRooms) => [...chattingRooms, newRoom]);
        });
    } catch (e: any) {
      alert(e);
    }
    disConnect();
    connect();
  };

  const bringAllChatRoom = useCallback(async () => {
    try {
      const res = await axios
        .get(
          `${
            process.env.NEXT_PUBLIC_API_URL
          }/api/chat/rooms?nickname=${"hello"}&type=${"MENTEE"}`
        )
        .then((res) => {
          // console.log();
          setChattingRooms(() => res.data.data);
        });
    } catch (e: any) {
      alert(e);
    }
  }, []);

  useEffect(() => {
    if (chattingRooms.length !== 0) {
      setSelectIndex(() => chattingRooms[chattingRooms.length - 1].roomId);
    }
  }, [chattingRooms]);

  //채팅 메뉴 이동 시 초기 연결
  useEffect(() => {
    connect();
    bringAllChatRoom();
    return () => disConnect();
  }, [bringAllChatRoom]);

  return (
    <ChattingComponentContext.Provider
      value={{
        chattingRooms,
        setChattingRooms,
        chattingMentor,
        moveChattingRoom,
        setChattingMentor,
        subscribe,
        messagesLog,
        messageInput,
        setMessageInput,
        createRoom,
        publish,
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
