import styled from "@emotion/styled";

export const ChatMenuForm = styled.div`
  width: 76px;
  height: 188px;
  flex-shrink: 0;
  border-radius: 12px 0px 0px 12px;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

const ChatMenu = () => {
  return <ChatMenuForm></ChatMenuForm>;
};

export default ChatMenu;
