import styled from "@emotion/styled";
export const RecruitContainerDiv = styled.div`
  width: 1000px;
  min-height: 600px;
  margin: 5px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  user-select: none;
`;

const Recruit = () => {
  return (
    <RecruitContainerDiv>
      {"채용소식"}
    </RecruitContainerDiv>
  );

};

export default Recruit;