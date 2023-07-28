import ChattingComponentContext from "@/context/chattingComponentContext";
import axios from "axios";
import { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";

var client: Client | null = null;

const ChattingComponentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const prototypes = [
    {
      roomId: "01",
      senderNickname: "박민수",
      message: "안녕하세요. 질문하신 내용에 대한 답변 드립니다.",
      messageType: "ENTER",
      time: "000",
    },
    {
      roomId: "02",
      senderNickname: "박하늘",
      message: " 저 같은 경우는 3학년 때까지 해당 과에서 공부를 오지게 했어요.",
      messageType: "ENTER1",
      time: "001",
    },
    {
      roomId: "03",
      senderNickname: "이민지",
      message: "공부하세요.",
      messageType: "ENTER1",
      time: "002",
    },
    {
      roomId: "04",
      senderNickname: "정재호",
      message: "놀지말고 쨔샤",
      messageType: "ENTER",
      time: "003",
    },
    {
      roomId: "05",
      senderNickname: "박민수",
      message: "안녕하세요. 질문하신 내용에 대한 답변 드립니다.",
      messageType: "ENTER1",
      time: "004",
    },
    {
      roomId: "06",
      senderNickname: "박하늘",
      message: " 저 같은 경우는 3학년 때까지 해당 과에서 공부를 오지게 했어요.",
      messageType: "ENTER",
      time: "005",
    },
    {
      roomId: "07",
      senderNickname: "이민지",
      message: "공부하세요.",
      messageType: "ENTER",
      time: "006",
    },
    {
      roomId: "08",
      senderNickname: "정재호",
      message: "놀지말고 쨔샤",
      messageType: "ENTER1",
      time: "007",
    },
  ];

  interface mentorInfo {
    mentorProfileImage: any;
    mentorName: any;
    numN: number;
  }
  interface messageInfo {
    roomId: any;
    senderNickname: string;
    message: string;
    messageType: string;
    time: string;
  }

  const [chattingRoom, setChattingRoom] = useState<any>([]);
  const [chattingMentor, setChattingMentor] = useState<mentorInfo>({
    mentorProfileImage: 0,
    mentorName: 0,
    numN: 0,
  });
  //   const [chattingLog, setChattingLog] = useState<any>([]);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<messageInfo[]>([]);

  const moveChattingRoom = async (index: any, roomID: any) => {
    const changeMentor: mentorInfo = {
      mentorProfileImage: 0,
      mentorName: roomID,
      numN: 1,
    };
    setChattingMentor(changeMentor);
    try {
      const res = await axios
        .get(
          `http://localhost:8080/api/chat/room/enter/${chattingMentor.mentorName}`
        )
        .then((res) => {
          console.log(res);
          subscribe();
        });
    } catch (e: any) {
      console.log(e);
    }
  };

  const subscribe = () => {
    client?.subscribe(
      `/queue/chat/room/${chattingMentor.mentorName}`,
      ({ body }) => {
        setChatMessages((_chatMessages: any) => [
          ..._chatMessages,
          JSON.parse(body).body.data,
        ]);
        console.log(JSON.parse(body).body.data);
      }
    );
  };

  useEffect(() => {
    connect();
    return () => disConnect();
  }, []);

  const connect = () => {
    client = new Client({
      brokerURL: "ws://localhost:8080/ws/chat/websocket",
      // "ws://ec2-43-201-243-64.ap-northeast-2.compute.amazonaws.com/stomp/chat/websocket",
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        subscribe();
      },
    });

    client.activate();
  };
  const publish = (message: any) => {
    if (!client?.connected) {
      return;
    }
    client?.publish({
      destination: "/pub/chat/message",
      body: JSON.stringify({ roomId: chattingMentor.mentorName, message }),
    });
    setMessage("");
  };

  const disConnect = () => {
    if (client != null) {
      if (client.connected) client.deactivate();
    }
  };

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
        prototypes,
      }}
    >
      {children}
    </ChattingComponentContext.Provider>
  );
};

export default ChattingComponentProvider;
