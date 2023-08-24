import styled from "@emotion/styled";
import Link from "next/link";
import UserProfile from "@/component/main/userAside/userProfile";
import AsideMenu from "@/component/main/userAside/asideMenu";
import { useSession } from "next-auth/react";
import UnauthMenu from "@/component/main/userAside/unauthMenu";
import { UnauthMenuContainerDiv } from "@/component/main/userAside/userAside.style";
import { useRecoilValue } from "recoil";
import { userState } from "@/states/state";

export const UserAsideContainer = styled.div`
  width: 327px;
  height: 470px;
  border-radius: 12px;
  border: 0 solid rgba(0, 0, 0, 0.12);
  background: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const UserAside = () => {
  const { status: sessionStatus } = useSession();
  const user = useRecoilValue(userState);

  return (
    <UserAsideContainer>
      {sessionStatus === "unauthenticated" ? (
        <UnauthMenu />
      ) : !!user.name ? (
        <>
          <UserProfile />
          <AsideMenu />
        </>
      ) : (
        <UnauthMenuContainerDiv>
          <Link href="/register">회원가입</Link>
        </UnauthMenuContainerDiv>
      )}
    </UserAsideContainer>
  );
};
export default UserAside;
