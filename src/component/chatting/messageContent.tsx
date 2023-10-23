import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { useRecoilState } from "recoil";
import {
  aiQuestionState,
  chatMessagesState,
  nowSubscribeState,
  ratingState,
} from "@/states/stateSubscribe";
import PointingIc from "@/img/ic_pointing.svg";
import axios from "axios";

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
        margin-top: 20px;
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
    .ratingBox {
      width: 285px;
      height: 33px;
      display: flex;
      margin-top: 10px;
      justify-content: space-between;
      .ratingBox_Yes {
        display: inline-flex;
        box-sizing: border-box;
        height: 33px;
        padding: 0 7px 0 34.5px;
        justify-content: flex-end;
        align-items: center;
        gap: 7.5px;
        flex-shrink: 0;
        border-radius: 12px;
        border: 1px solid #ff8a00;
        background: rgba(255, 138, 0, 0.2);
        color: #ff8a00;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 21px */
        :hover {
          cursor: pointer;
        }
      }
      .ratingBox_No {
        display: flex;
        width: 125px;
        padding: 6px 0px;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        background: #b6b3b3;
        color: #fff;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 21px */
        :hover {
          cursor: pointer;
        }
      }
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
  const [ratingSelect, setRatingSelect] = useRecoilState(ratingState); //도움이 됐어요 메세지

  const moveScroll = () => {
    content1Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    moveScroll();
  }, [messagesLog]);

  const rating = async (Id: any, questionId: any, likeStatus: any) => {
    try {
      const res = await axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/api/chat/ratings`, {
          Id: Id,
          questionId: questionId,
          likeStatus: likeStatus,
        })
        .then((res) => {
          console.log(res);
        });
    } catch (e: any) {
      console.log(e);
    }
    setRatingSelect({ questionId, likeStatus });
  };

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
                      <div style={{ display: "block" }}>
                        {_chatMessage.message}
                      </div>
                      {_chatMessage?.messageList?.map(
                        (_messageList: any, index: any, messageList: any) => (
                          <div className="answerBox" key={index}>
                            <div className="numberBox">{index + 1}</div>
                            <div className="textBox">
                              <span className="summary">
                                {_messageList.question_summary}
                              </span>
                              {messageList.length !== index + 1 && (
                                <>
                                  <span
                                    className="answer"
                                    onClick={() =>
                                      setAiQuestion({
                                        questionId: _messageList.question_id,
                                        index: index + 1,
                                        AI_SUMMARY:
                                          _messageList.question_summary,
                                        AI_SUMMARY_ANSWER: _messageList.answer,
                                      })
                                    }
                                  >
                                    {"A. " + _messageList.answer}
                                  </span>
                                  <span className="percent">
                                    유사도 : {_messageList.similarity_percent}%
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    <span
                      className="mentorMessageBubble"
                      style={
                        _chatMessage.messageType === "AI_SUMMARY_ANSWER"
                          ? { color: "#1e85ff" }
                          : { color: "black" }
                      }
                    >
                      {_chatMessage.message}
                      {_chatMessage.messageType === "AI_SUMMARY_RATING" && (
                        <div className="ratingBox">
                          <div
                            className="ratingBox_Yes"
                            onClick={() =>
                              rating(
                                _chatMessage._id,
                                aiQuestion.questionId,
                                true
                              )
                            }
                          >
                            도움이 됐어요 <PointingIc />
                          </div>
                          <div
                            className="ratingBox_No"
                            onClick={() =>
                              rating(
                                _chatMessage._id,
                                aiQuestion.questionId,
                                false
                              )
                            }
                          >
                            아니요
                          </div>
                        </div>
                      )}
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
