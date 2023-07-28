import styled from "@emotion/styled";
import UserProfile from "@/component/main/userAside/userProfile";
import {AsideBtnGroup, ChattingListDiv} from "@/component/main/userAside/userAside.style";
import ChattingCard from "@/component/main/userAside/chattingCard";
import {authedTokenAxios, refreshTokenAPI} from "@/lib/jwt";
import {useSession} from "next-auth/react";

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
  const {data: sessionData, update: sessionUpdate} =useSession();
  const tokenAxios = async () => {
    const test_url = `${process.env.NEXT_PUBLIC_API_URL}/api/user/token-test`
    if (sessionData?.accessToken) {
      try {
        const response = await authedTokenAxios(sessionData.accessToken).post(test_url, "None")
        console.log(response.data.message, "!")
      } catch (error: any) {
        console.log(`${error.response.data?.code}: ${error.response.data?.message}`)
        refreshTokenAPI(sessionData, sessionUpdate).then(() => {})
        }
      }
    }

  return (
    <UserAsideContainer>
      <UserProfile/>
      <AsideBtnGroup>
        <button onClick={tokenAxios}>팔로우</button>
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