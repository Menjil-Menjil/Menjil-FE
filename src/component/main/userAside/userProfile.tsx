import LogoutIc from "@/img/ic_logout.svg"
import Image from "next/image";
import Link from "next/link";
import {UserProfileContainerDiv} from "@/component/main/userAside/userAside.style";
import {signOut, useSession} from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilValue, useResetRecoilState } from "recoil";
import {userState} from "@/states/stateUser";
import editIc from "@/img/ic_edit.png"

const UserProfile = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();
  const user = useRecoilValue(userState);
  const resetUser = useResetRecoilState(userState);
  const logOutHandler = () => {
    if (sessionData) {
      signOut({redirect:false, callbackUrl: "/"}).then(() => {
        router.push("/").then(resetUser)
      })
    }
  };

  return (
    <UserProfileContainerDiv>
      <div className="profileInfo">
        <div className="profileImgBox">
          <Image src={user.image} alt="profile" fill sizes="20vw" style={{objectFit: "cover"}}/>
        </div>
        <div className="profileContent userInfoTextStyle">
          <div className="titleWrapper userInfoTitleStyle marginB8">
            {user.name} 님
            <Link href="/mypage">
              <div className="editIconBox">
                <Image src={editIc} alt="profile" fill sizes="50vw" style={{objectFit: "cover"}}/>
              </div>
            </Link>
          </div>
          <div className="marginB5">{user.name}</div>
          <div className="wrapper">
            {user.school}
            <div className="line">&nbsp;</div>
            {user.major}
          </div>
        </div>
      </div>
      <div className="btnLogout" onClick={logOutHandler}>
        <p className="btnLogoutTextMargin btnLogoutTextStyle">로그아웃</p>
        <LogoutIc width='16' height='16'/>
      </div>
    </UserProfileContainerDiv>
  );
};
export default UserProfile;