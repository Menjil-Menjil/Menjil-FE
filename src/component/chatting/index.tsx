import React, { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";
import styled from "@emotion/styled";

export const ChattingForm = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 70%;
  height: 1000px;
  background-color: red;
`;

var client: Client | null = null;
const ROOM_SEQ = 1;

const Chatting = () => {
  const [chatMessages, setChatMessages] = useState<any>([]);
  const [message, setMessage] = useState("");

  const subscribe = () => {
    client?.subscribe(`/sub/chat/room/${ROOM_SEQ}`, ({ body }) => {
      setChatMessages((_chatMessages: any) => [
        ..._chatMessages,
        JSON.parse(body),
      ]);
      console.log(body);
    });

    chatMessages.map((_chatMessage: any, index: any) =>
      console.log(_chatMessage)
    );
  };

  useEffect(() => {
    connect();
    return () => disConnect();
  }, []);

  const connect = () => {
    client = new Client({
      brokerURL: "ws://localhost:8080/ws-stomp/websocket",
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
      body: JSON.stringify({ roomId: ROOM_SEQ, message }),
    });

    setMessage("");
  };

  const disConnect = () => {
    if (client != null) {
      if (client.connected) client.deactivate();
    }
  };

  return (
    <ChattingForm>
      <div>
        {chatMessages && chatMessages.length > 0 && (
          <ul>
            {chatMessages.map((_chatMessage: any, index: any) => (
              <li key={index}>{_chatMessage.message}</li>
            ))}
          </ul>
        )}
        <div>
          <input
            type={"text"}
            placeholder={"message"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={() => {
              console.log(message);
              publish(message);
            }}
          >
            send
          </button>
        </div>
      </div>
    </ChattingForm>
  );
};

export default Chatting;
