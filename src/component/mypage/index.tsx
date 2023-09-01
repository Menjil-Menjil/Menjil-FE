import styled from "@emotion/styled";

export const MyPageContainerDiv = styled.div`
  width: 1000px;
  min-height: 600px;
  margin: 5px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  user-select: none;
`;

const MyPage = () => {
  return (
    <MyPageContainerDiv>
      <div>마이페이지</div>
    </MyPageContainerDiv>
  );
};
export default MyPage;