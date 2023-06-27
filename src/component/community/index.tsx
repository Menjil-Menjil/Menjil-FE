import styled from "@emotion/styled";
export const CommunityContainerDiv = styled.div`
  width: 1000px;
  min-height: 600px;
  margin: 5px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  user-select: none;
`;

const Community = () => {
  return (
    <CommunityContainerDiv>
      {"커뮤니티"}
    </CommunityContainerDiv>
  );

};

export default Community;