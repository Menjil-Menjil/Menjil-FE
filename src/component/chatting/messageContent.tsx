import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { useRecoilState } from "recoil";
import {
  aiQuestionState,
  chatMessagesState,
  nowSubscribeState,
} from "@/states/stateSubscribe";

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
      flex-shrink: 0;
      border-radius: 0px 12px 12px 12px;
      background: #f0f0ef;
      display: block;
      padding: 15px 20px;
      color: black;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 22.5px */
      .answerBox {
        display: flex;
        margin-top: 9px;
        .numberBox {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
          border-radius: 3px;
          background: #878787;
          color: #fff;
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: 150%; /* 21px */
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 6px;
        }
        .textBox {
          display: block;
          .summary {
            color: #000;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 22.5px */
          }
          .answer {
            max-width: 580px;
            display: block;
            color: #1e85ff;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 22.5px */
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            margin-top: 5px;
            margin-bottom: 4px;
            :hover {
              cursor: pointer;
            }
          }
        }
      }
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
    /* position: absolute; */
    /* width: 50px;
    height: 50px; */

    color: #575757;
    text-align: center;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const MessageContent = () => {
  const content1Ref = useRef<HTMLDivElement>(null);
  const [chattingMentor, setChattingMentor] = useRecoilState(nowSubscribeState);
  const [messagesLog, setMessagesLog] = useRecoilState(chatMessagesState); //메세지들
  const [aiQuestion, setAiQuestion] = useRecoilState(aiQuestionState); //보내는 메세지

  const moveScroll = () => {
    content1Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    moveScroll();
  }, [messagesLog]);

  return (
    <MessageContentDiv>
      {messagesLog && messagesLog.length > 0 && (
        <ul>
          <div ref={content1Ref} />
          {messagesLog.map(
            (_chatMessage: any, index: number) =>
              _chatMessage.roomId === chattingMentor.roomId &&
              (_chatMessage.senderType === "MENTOR" ? (
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
                  {_chatMessage.messageList ? (
                    <div className="mentorMessageBubble">
                      <span>{_chatMessage.message}</span>
                      {_chatMessage?.messageList?.map(
                        (_messageList: any, index: any) => (
                          <div className="answerBox" key={index}>
                            <div className="numberBox">{index + 1}</div>
                            <div className="textBox">
                              <span className="summary">
                                {_messageList.question_summary}
                              </span>
                              <span
                                className="answer"
                                onClick={() =>
                                  setAiQuestion({
                                    index: index + 1,
                                    AI_SUMMARY: _messageList.question_summary,
                                    AI_SUMMARY_ANSWER: _messageList.answer,
                                  })
                                }
                              >
                                {"A. " + _messageList.answer}
                              </span>
                              <span className="percent">
                                {_messageList.similarity_percent}
                              </span>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    // style = {_chatMessage.messageType === "AI_SUMMARY" ? (color: "#1e85ff") : (color: "black")}
                    <span className="mentorMessageBubble">
                      {_chatMessage.message}
                    </span>
                  )}
                  <span className="mentorMessageTime">{_chatMessage.time}</span>
                </li>
              ) : (
                <li className="menteeMessage" key={index}>
                  <span className="menteeMessageTime">{_chatMessage.time}</span>
                  <span className="menteeMessageBubble">
                    {_chatMessage.message}
                  </span>
                </li>
              ))
          )}
        </ul>
      )}
    </MessageContentDiv>
  );
};

export default MessageContent;
