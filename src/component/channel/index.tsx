import styled from "@emotion/styled";
export const ChannelContainerDiv = styled.div`
  width: 1000px;
  min-height: 600px;
  margin: 5px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  user-select: none;
`;

const Channel = () => {
  return (
    <ChannelContainerDiv>
      {"채널"}
    </ChannelContainerDiv>
  );

};

export default Channel;