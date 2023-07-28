import ChattingComponentContext from "@/context/chattingComponentContext";
import styled from "@emotion/styled";
import { useContext, useState } from "react";

export const ChatListForm = styled.div`
  width: 400px;
  height: 750px;
  flex-shrink: 0;
  margin-right: 30px;
  display: block;
  position: relative;
  font-style: normal;
  border-radius: 12px;
  border: 0px solid #bebebe;
  background: rgba(244, 243, 241, 0.47);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);

  .chatMenuHeader {
    position: static;
    width: 100%;
    height: 60px;
    flex-shrink: 0;
    border-radius: 12px 12px 0px 0px;
    background: #f4f3f1;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
    .chatMenuHeaderText {
      position: absolute;
      color: #000;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin: 20px auto auto 25px;
    }
  }
  .chatListDiv {
    position: static;
    width: 400px;
    margin: 0 auto;
    .chatListBox {
      position: relative;
      width: 400px;
      height: 95px;
      flex-shrink: 0;
      display: flex;
      border-bottom: 1px solid #e0e0e0;
      .profileImg {
        width: 53px;
        height: 53px;
        flex-shrink: 0;
        border-radius: 12px;
        background: url(<path-to-image>), lightgray 50% / cover no-repeat;
        margin: auto 15px auto 25px;
      }
      .messageContentDiv {
        width: 282px;
        height: 65px;
        margin-top: 15px;
        position: relative;
        display: block;
        .nameHeaderDiv {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .mentorName {
            color: #000;
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
          }
          .messageTime {
            top: 12px;
            right: 9px;
            color: rgba(82, 82, 82, 0.92);
            text-align: right;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
        }
        .messageContent {
          width: 277px;
          height: 42px;
          display: block;
          margin-top: 5px;
          color: #525252;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%; /* 21px */
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
`;

const ChatList = () => {
  const { chattingRoom, moveChattingRoom } = useContext<any>(
    ChattingComponentContext
  );

  return (
    <ChatListForm>
      <div className="chatMenuHeader">
        <p className="chatMenuHeaderText">채팅목록</p>
      </div>
      {chattingRoom && chattingRoom.length > 0 && (
        <div className="chatListDiv">
          {chattingRoom.map((_chattingRoom: any, index: any) => (
            <div
              className="chatListBox"
              key={index}
              onClick={() => {
                moveChattingRoom(index, _chattingRoom.roomId);
                // console.log(_chattingRoom.roomId);
              }}
            >
              <div className="profileImg"></div>
              <div className="messageContentDiv">
                <div className="nameHeaderDiv">
                  <span className="mentorName">김김최</span>
                  <span className="messageTime">1시간 전</span>
                </div>
                <span className="messageContent">{_chattingRoom.roomId}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </ChatListForm>
  );
};

export default ChatList;
