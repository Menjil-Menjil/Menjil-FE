import styled from "@emotion/styled";
import UserProfile from "@/component/main/userAside/userProfile";
import AsideMenu from "@/component/main/userAside/asideMenu";
import {useSession} from "next-auth/react";
import UnauthMenu from "@/component/main/userAside/unauthMenu";

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
  const { data: sessionData, status: sessionStatus } = useSession();

  return (
    <UserAsideContainer>
      {sessionStatus === "unauthenticated" && (
        <UnauthMenu/>
      )}
      {sessionStatus === "authenticated" && (
        <>
          <UserProfile/>
          <AsideMenu/>
        </>
      )}
    </UserAsideContainer>
  );
}
export default UserAside;