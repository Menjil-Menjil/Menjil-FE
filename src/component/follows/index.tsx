import styled from "@emotion/styled";
export const FollowsContainerDiv = styled.div`
  width: 1000px;
  min-height: 600px;
  margin: 5px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  user-select: none;
`;

const Follows = () => {
  return (
    <FollowsContainerDiv>
      {"관심멘토"}
    </FollowsContainerDiv>
  );

};

export default Follows;