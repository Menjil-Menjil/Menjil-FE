import React, { useContext, useState } from "react";
import styled from "@emotion/styled";
import ChattingComponentContext from "@/context/chattingComponentContext";
import Image from "next/image";

export const MessageContentDiv = styled.div`
  width: 100%;
  height: 543px;
  overflow-y: auto;
  > ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column-reverse;
  }
  .mentorMessage {
    display: flex;
    margin-top: 25px;
    margin-left: 25px;
    .messageMentorProfileImage {
      width: 38px;
      height: 38px;
      position: relative;
      overflow: hidden;
      flex-shrink: 0;
      border-radius: 7px;
      background: #ffaa00;
      margin-right: 10px;
    }
    .mentorMessageBubble {
      max-width: 600px;
      max-height: 145px;
      flex-shrink: 0;
      border-radius: 0px 12px 12px 12px;
      background: #f0f0ef;
      display: inline-block;
      padding: 15px 20px;
      color: black;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 22.5px */
    }
    .mentorMessageTime {
      color: #575757;
      font-size: 11px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 16.5px */
      margin-left: 10px;
      display: flex;
      align-items: flex-end;
    }
  }
  .menteeMessage {
    display: flex;
    margin-top: 25px;
    margin-right: 28px;
    justify-content: flex-end;
    .menteeMessageTime {
      color: #575757;
      font-size: 11px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 16.5px */
      margin-right: 10px;
      display: flex;
      align-items: flex-end;
    }
    .menteeMessageBubble {
      max-width: 600px;
      /* max-height: 145px; */
      border-radius: 12px 0px 12px 12px;
      background: #ff8a00;
      display: inline-block;
      padding: 15px 20px;
      color: #fff;
      text-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.25);
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 22.5px */
    }
  }
  .messageTime {
    width: 50px;
    height: 50px;
  }
`;

const MessageContent = () => {
  const { messagesLog, chattingMentor } = useContext<any>(
    ChattingComponentContext
  );

  return (
    <MessageContentDiv>
      {messagesLog && messagesLog.length > 0 && (
        <ul>
          {messagesLog.map(
            (_chatMessage: any, index: number) => (
              _chatMessage.time === _chatMessage.time && (
                <div className="messageTime">{_chatMessage.time}</div>
              ),
              _chatMessage.senderType === "MENTOR" ? (
                <li className="mentorMessage" key={index}>
                  <div className="messageMentorProfileImage">
                    <Image
                      src={chattingMentor.imgUrl}
                      alt="profile"
                      fill
                      sizes="50vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <span className="mentorMessageBubble">
                    {_chatMessage.message}
                  </span>
                  <span className="mentorMessageTime">{_chatMessage.time}</span>
                </li>
              ) : (
                <li className="menteeMessage" key={index}>
                  <span className="menteeMessageTime">{_chatMessage.time}</span>
                  <span className="menteeMessageBubble">
                    {_chatMessage.message}
                  </span>
                </li>
              )
            )
          )}
        </ul>
      )}
    </MessageContentDiv>
  );
};

export default MessageContent;
