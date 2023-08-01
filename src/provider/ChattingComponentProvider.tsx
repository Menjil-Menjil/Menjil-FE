import ChattingComponentContext from "@/context/chattingComponentContext";
import axios from "axios";
import { useState } from "react";
import { Client } from "@stomp/stompjs";
import useDidMountEffect from "@/component/useDidmountEffect";

var client: Client | null = null;

const ChattingComponentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  interface mentorInfo {
    roomId: string;
    mentorProfileImage: any;
    mentorName: any;
    numN: number;
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

  const [chattingRoom, setChattingRoom] = useState<any>([]);
  const [chattingMentor, setChattingMentor] = useState<mentorInfo>({
    roomId: "0",
    mentorProfileImage: 0,
    mentorName: 0,
    numN: 0,
  }); //멘토 데이터

  const [message, setMessage] = useState(""); //보내는 메세지
  const [chatMessages, setChatMessages] = useState<messageInfo[]>([]); //메세지들

  const subscribe = () => {
    client?.subscribe(
      `/queue/chat/room/${chattingMentor.roomId}`,
      ({ body }) => {
        // console.log(JSON.parse(body).body);
        JSON.parse(body).body.data.map((message: any) => {
          setChatMessages((_chatMessages: any) => [..._chatMessages, message]);
          console.log(message);
        });
      }
    );
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
      // onConnect: () => {
      //   subscribe();
      // },
    })),
      client.activate();
  };

  const publish = (message: any) => {
    if (!client?.connected) return;
    client?.publish({
      destination: "/pub/chat/message",
      body: JSON.stringify({ roomId: chattingMentor.roomId, message }),
    });
    setMessage("");
  };

  const disConnect = () => {
    if (client != null) {
      if (client.connected) client.deactivate();
    }
  };

  const moveChattingRoom = (roomID: any) => {
    removeAllChatMessages();
    const changeMentor: mentorInfo = {
      roomId: roomID,
      mentorProfileImage: 0,
      mentorName: 123,
      numN: 1,
    };
    setChattingMentor(changeMentor);
  };

  const enterChattingRoom = async () => {
    client?.unsubscribe(`/queue/chat/room/${chattingMentor.roomId}`);
    subscribe();
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/chat/room/enter/${chattingMentor.roomId}`
      );
      // .then((res) => {
      //   console.log(res);
      // });
    } catch (e: any) {
      console.log(e);
    }
    disConnect();
    connect();
  };

  const removeAllChatMessages = () => {
    setChatMessages([]);
  };

  useDidMountEffect(() => {
    connect();
    return () => disConnect();
  }, []);

  return (
    <ChattingComponentContext.Provider
      value={{
        chattingRoom,
        setChattingRoom,
        chattingMentor,
        moveChattingRoom,
        setChattingMentor,
        publish,
        chatMessages,
        message,
        setMessage,
        enterChattingRoom,
      }}
    >
      {children}
    </ChattingComponentContext.Provider>
  );
};

export default ChattingComponentProvider;
