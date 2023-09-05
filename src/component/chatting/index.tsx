import styled from "@emotion/styled";
import ChatLog from "./chatLog";
import ChatList from "./chatList";

export const ChattingForm = styled.div`
  width: 1404px;
  height: 800px;
  position: relative;
  display: flex;
  justify-content: center;
  margin: 50px auto 197px;
  user-select: none;
`;

const Chatting = () => {
  return (
    <ChattingForm>
      <ChatList />
      <ChatLog />
    </ChattingForm>
  );
};

export default Chatting;
