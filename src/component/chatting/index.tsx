import styled from "@emotion/styled";
import ChatLog from "@/component/chatting/chatLog";
export const ChattingContainerDiv = styled.div`
  width: 1000px;
  min-height: 600px;
  margin: 5px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  user-select: none;
`;

const Chatting = () => {
  return (
    <ChattingContainerDiv>
      <ChatLog/>
    </ChattingContainerDiv>
  );

};

export default Chatting;