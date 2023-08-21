import React, { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import ChattingComponentContext from "@/context/chattingComponentContext";
import SendIc from "@/img/ic_send.svg";
import DotIc from "@/img/ic_dot-horizontal.svg";
import useDidMountEffect from "../useDidmountEffect";

export const ChatLogForm = styled.div`
  position: relative;
  width: 898px;
  height: 750px;
  display: block;
  border-radius: 12px;
  border: 0px solid #bebebe;
  background: rgba(255, 255, 255, 0.37);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  .chatLogHeader {
    width: 100%;
    height: 95px;
    position: relative;
    border-radius: 12px 12px 0px 0px;
    border-bottom: 1px solid #e0e0e0;
    background: #f4f3f1;
    box-sizing: border-box;
    display: flex;
    .mentorInfoDiv {
      height: 55px;
      position: relative;
      top: 20px;
      left: 25px;
      display: flex;
      align-items: center;
      .mentorProfileImage {
        width: 55px;
        height: 55px;
        flex-shrink: 0;
        border-radius: 12px;
        background: #ffaa00;
      }
      .mentorProfileTextBox {
        height: 46px;
        flex-shrink: 0;
        margin-left: 15px;
        display: block;
        overflow: visible;
        .mentorProfileName {
          color: #000;
          font-size: 18px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          display: block;
          margin-bottom: 8px;
        }
        .recommendedAnswerNumber {
          color: #525252;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          display: block;
        }
      }
    }
    .DotIc {
      position: absolute;
      top: 36px;
      right: 25px;
    }
  }
  .messageContentDiv {
    width: 100%;
    height: 543px;
    overflow-y: auto;
    > ul {
      list-style-type: none;
      padding: 0;
    }
    .mentorMessage {
      display: flex;
      margin-top: 25px;
      margin-left: 25px;
      .messageMentorProfileImage {
        width: 38px;
        height: 38px;
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
        max-height: 145px;
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
  }

  .messageContainer {
    width: 100%;
    height: 112px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 0px;
    border-radius: 0px 0px 12px 12px;
    border-top: 1px solid #e0e0e0;
    background: #f4f3f1;
    box-sizing: border-box;
    .sendMessageBoxDiv {
      width: 848px;
      height: 72px;
      position: relative;
      align-items: center;
      border-radius: 12px;
      border: 1px solid #bebebe;
      background: #fff;
      display: flex;

      .messageInputDiv {
        width: 669px;
        height: 42px;
        border: none;
        position: absolute;
        top: 0;
        padding: 0;
        background-color: transparent;
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-left: 20px;
        margin-top: 15px;
        white-space: pre-wrap;
        resize: none;
        :focus {
          outline: none;
        }
        ::placeholder {
          color: rgba(0, 0, 0, 0.37);
        }
      }
    }
    .sendBtn {
      position: absolute;
      display: flex;
      margin: 0 auto;
      right: 20px;
      width: 119px;
      height: 42px;
      flex-shrink: 0;
      border-radius: 12px;
      border: 1px solid #ff8a00;
      background: #ff8a00;
      color: #fff;
      text-shadow: 0px 0px 3px 0px rgba(216, 101, 37, 0.5);
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      align-items: center;
      justify-content: center;
      :disabled {
        background-color: #353535;
        border: 1px solid #000000;
      }
    }
  }
`;

const ChatLog = () => {
  const {
    chattingMentor,
    publish,
    messagesLog,
    messageInput,
    setMessageInput,
  } = useContext<any>(ChattingComponentContext);

  return (
    <ChatLogForm>
      <div className="chatLogHeader">
        <div className="mentorInfoDiv">
          <div className="mentorProfileImage"></div>
          <div className="mentorProfileTextBox">
            <span className="mentorProfileName">
              {chattingMentor.roomId.substr(0, 5)}
            </span>
            <span className="recommendedAnswerNumber">답변수, 팔로워수</span>
          </div>
        </div>
        <DotIc className="DotIc" />
      </div>
      <div className="messageContentDiv">
        {messagesLog && messagesLog.length > 0 && (
          <ul>
            {messagesLog.map((_chatMessage: any, index: any) =>
              _chatMessage.senderType === "MENTOR" ? (
                <li className="mentorMessage" key={index}>
                  <div className="messageMentorProfileImage"></div>
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
            )}
          </ul>
        )}
      </div>
      <div className="messageContainer">
        <div className="sendMessageBoxDiv">
          <textarea
            placeholder={"멘토에게 질문하고 싶은 점을 입력해주세요!"}
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            className="messageInputDiv"
          />
          <button
            className="sendBtn"
            disabled={messageInput.length === 0 ? true : false}
            onClick={() => {
              console.log(messageInput);
              publish(messageInput);
            }}
          >
            <SendIc style={{ marginRight: "5px" }} /> 전송하기
          </button>
        </div>
      </div>
    </ChatLogForm>
  );
};

export default ChatLog;
