import ChattingComponentContext from "@/context/chattingComponentContext";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { Client } from "@stomp/stompjs";
import { v5 } from "uuid";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { userState } from "@/states/stateUser";

var client: Client | null = null;

const ChattingComponentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  interface chattingRoomInfo {
    roomId: string;
    imgUrl: any;
    nickname: any;
    lastMessage: string;
  }
  interface messageInfo {
    message: string;
    messageType: string;
    messageList: messageList;
    order: number;
    roomId: any;
    senderNickname: string;
    senderType: string;
    time: any;
    _id: any;
  }
  interface messageList {
    answer: string;
    question_summary: string;
    similarity_percent: Number;
  }

  const [chattingRooms, setChattingRooms] = useState<chattingRoomInfo[]>([]);
  const [chattingMentor, setChattingMentor] = useState<chattingRoomInfo>({
    roomId: "",
    imgUrl: 0,
    nickname: 0,
    lastMessage: "",
  }); //멘토 데이터

  const [subscription, setSubscription] = useState<any>();
  const [messageInput, setMessageInput] = useState<string>(""); //보내는 메세지
  const [messagesLog, setMessagesLog] = useState<messageInfo[]>([]); //메세지들
  const [selectIndex, setSelectIndex] = useState<any>(); //선택된 인덱스

  const user = useRecoilValue(userState);

  // 채팅방 구독하기
  const subscribe = (roomId: any) => {
    const subscription = client?.subscribe(
      `/queue/chat/room/${roomId}`,
      ({ body }) => {
        if (typeof JSON.parse(body).data.length === "number") {
          //채팅이 여러 개일 경우
          console.log(JSON.parse(body));
          JSON.parse(body).data.map((message: any) => {
            setMessagesLog((messagesLog) => [...messagesLog, message]);
          });
        } else {
          //하나씩 오는 대화 아래에 표시
          console.log(JSON.parse(body));
          setMessagesLog((messagesLog) => [
            JSON.parse(body).data,
            ...messagesLog,
          ]);
        }
      }
    );
    return setSubscription(() => subscription);
  };

  const connect = () => {
    (client = new Client({
      brokerURL: `${process.env.NEXT_PUBLIC_STOMP_API_URL}/ws/chat/websocket`,
      debug: function (str) {
        console.log(str);
      },
      // onConnect: () => {
      //   subscribe(chattingMentor.roomId);
      // },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    })),
      client.activate();
  };

  const publish = (message: any) => {
    if (!client?.connected) return;
    const today = new Date();
    const year = today.getFullYear();
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    const day = ("0" + today.getDate()).slice(-2);
    const hours = ("0" + today.getHours()).slice(-2);
    const minutes = ("0" + today.getMinutes()).slice(-2);
    const seconds = ("0" + today.getSeconds()).slice(-2);

    const dateString = year + "-" + month + "-" + day;
    const timeString = hours + ":" + minutes + ":" + seconds;
    const nowTime = dateString + " " + timeString;

    client?.publish({
      destination: `/pub/chat/room/${chattingMentor.roomId}`,
      body: JSON.stringify({
        roomId: chattingMentor.roomId,
        senderType: "MENTEE",
        senderNickname: user.name,
        message: message,
        messageType: "QUESTION",
        time: nowTime,
      }),
    });
    setMessageInput("");
  };

  const disConnect = () => {
    if (client != null) {
      if (client.connected) client.deactivate();
    }
  };

  const removeAllChatMessages = () => {
    setMessagesLog(() => []);
  };

  const enterChattingRoom = async (room: chattingRoomInfo) => {
    client?.unsubscribe(subscription?.id);
    subscribe(room.roomId);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/chat/room/enter/`,
        {
          menteeNickname: user.name,
          mentorNickname: room.nickname,
          roomId: room.roomId,
        }
      );
      // console.log(res);
      // .then((res) => {
      //   setChattingRooms([...chattingRooms, chattingMentor]);
      // });
    } catch (e: any) {
      console.log(e);
    }
  };

  // 채팅방 목록에서 이동
  const moveChattingRoom = (room: chattingRoomInfo) => {
    removeAllChatMessages();
    setChattingMentor(() => room);
    enterChattingRoom(room);
  };

  // 채팅방 신규입장
  const createRoom = async () => {
    const mentee: any = user.name;
    const mentor: string = "mentor1";
    const randomSeed: string = mentee + "*" + mentor;
    const roomId: string = v5(randomSeed, v5.URL);

    const newRoom: chattingRoomInfo = {
      roomId: roomId,
      imgUrl: 0,
      nickname: mentor,
      lastMessage: "",
    };

    removeAllChatMessages();
    setChattingMentor(() => newRoom);
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
  };

  const bringAllChatRoom = useCallback(async () => {
    try {
      const res = await axios
        .get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/chat/rooms?nickname=${
            user.name
          }&type=${"MENTEE"}`
        )
        .then((res) => {
          setChattingRooms(() => res.data.data);
        });
    } catch (e: any) {
      alert(e);
    }
  }, [user.name]);

  // const showQuestion = (index: any, answer: string) => {
  //   const message : messageInfo = {
  //     message: ;
  //     messageType: ;
  //     messageList: ;
  //     order: ;
  //     roomId: ;
  //     senderNickname: ;
  //     senderType: ;
  //     time: ;
  //     _id: ;
  //   };
  //   publish();
  // };

  useEffect(() => {
    if (chattingMentor.roomId !== "") {
      setSelectIndex(() => chattingMentor.roomId);
    }
  }, [chattingMentor]);

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
        // showQuestion,
      }}
    >
      {children}
    </ChattingComponentContext.Provider>
  );
};

export default ChattingComponentProvider;
