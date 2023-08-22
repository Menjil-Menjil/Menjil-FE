import LogoutIc from "@/img/ic_logout.svg"
import Image from "next/image";
import {UserProfileContainerDiv} from "@/component/main/userAside/userAside.style";
import {signOut, useSession} from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilValue, useResetRecoilState } from "recoil";
import {userState} from "@/states/state";

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
      <div className="profileInfo wrap">
        <div className="profileImgBox">
          <Image src={user.image} alt="profile" fill sizes="50vw" style={{objectFit: "cover"}}/>
        </div>
        <div className="profileContent userInfoTextStyle">
          <div className="userInfoTitleStyle marginB8">{user.name} 님</div>
          <div className="marginB3">{user.name}</div>
          <div className="wrap center marginB8">
            {user.school}
            <div className="line"/>
            {user.major}
          </div>
          <div>마이페이지</div>
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