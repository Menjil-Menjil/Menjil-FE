import styled from "@emotion/styled";
import UserProfile from "@/component/main/userAside/userProfile";
import {AsideBtnGroup, ChattingListDiv} from "@/component/main/userAside/userAside.style";
import ChattingCard from "@/component/main/userAside/chattingCard";

export const UserAsideContainer = styled.div`
  width: 327px;
  height: 425px;
  border-radius: 12px;
  border: 0 solid rgba(0, 0, 0, 0.12);
  background: #FFF;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 37px;
`;
const UserAside = () => {
  return (
    <UserAsideContainer>
      <UserProfile/>
      <AsideBtnGroup>
        <button>팔로우</button>
        <button>채팅목록</button>
      </AsideBtnGroup>
      <ChattingListDiv>
        <ChattingCard/>
        <ChattingCard/>
      </ChattingListDiv>
    </UserAsideContainer>
  );
}
export default UserAside;