import { useEffect, useState } from "react";
import RegisterModal from "./modal/registerModal";
import LoginModal from "./modal/loginModal";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState, useResetRecoilState } from "recoil";
import {userState} from "@/states/stateUser";
import {HeaderSection, MemberMenu, StyledLink} from "@/component/layout/header/header.style";
import Image from "next/image";

const Header = () => {
  const router = useRouter();
  const { data: sessionData, status: sessionStatus } = useSession();
  const [user, setUser] = useRecoilState(userState);
  const resetUser = useResetRecoilState(userState);

  useEffect(() => {
    console.log("status:", JSON.stringify(sessionStatus));
    if (sessionData?.error) {
      signOut({ redirect: false}).then(() => {
        console.log(sessionData.error)
        alert("다시 로그인 해주세요!")
        return resetUser
      })
    } else {
      if (sessionData?.user?.name && sessionStatus === "authenticated") {
        setUser({
          name: sessionData.user.name,
          email: sessionData.user.email,
          image: sessionData.user.image,
          school:sessionData.user.school,
          major: sessionData.user.major
        })
      }
    }
  }, [sessionData?.error, sessionData?.user?.name, setUser]);

  // 모달 버튼 클릭 유무를 저장할 state
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  // 버튼 클릭시 모달 버튼 클릭 유무를 설정하는 state 함수
  const closeLoginModal = () => setShowLoginModal(!showLoginModal);
  const closeRegisterModal = () => setShowRegisterModal(!showRegisterModal);

  //모달 변경 함수
  const changeModal = () => {
    setShowRegisterModal(!showRegisterModal);
    setShowLoginModal(!showLoginModal);
  };

  const logOutHandler = () => {
    if (sessionData) {
      signOut({ redirect: false, callbackUrl: "/" }).then(() => {
        router.push("/").then(resetUser)
      });
    }
    //로컬로그아웃함수;
  };
  const unAuthUserLogoutHandler = () => {
    if (sessionData && !user.name) {
      signOut({ redirect: false, callbackUrl: "/" }).then(() => {
        alert("아직 회원가입이 완료되지 않았습니다. 나가시겠습니까?")
      });
    }
  }

  // const getChatList = async () => {
  //   try {
  //     const res = await axios
  //       .post(
  //         `${
  //           process.env.NEXT_PUBLIC_API_URL
  //         }/api/chat/rooms?nickname=${"멘티닉네임"}?type=MENTEE`,
  //         {}
  //       )
  //       .then((res) => {});
  //   } catch (e: any) {
  //     alert(e);
  //   }
  // };

  return (
    <>
      <HeaderSection>
        <div className="category">
          <StyledLink className="logo" href="/" onClick={unAuthUserLogoutHandler}>
            menjil
          </StyledLink>
          <StyledLink className="chatting" href="/chatting" onClick={unAuthUserLogoutHandler}>
            멘토링
          </StyledLink>
          <StyledLink className="follows" href="/follows"  onClick={unAuthUserLogoutHandler}>
            관심 멘토
          </StyledLink>
          <StyledLink className="community" href="/community" onClick={unAuthUserLogoutHandler}>
            커뮤니티
          </StyledLink>
        </div>
        <div className="member">
          {sessionData?.user ? (
            <>
              {user.name ? (
                <MemberMenu>
                  <Image src={user.image} alt="profile" width={26} height={26} style={{borderRadius: 7}}/>
                  <p>{user.name} 님</p>
                  <div className="line"/>
                  <StyledLink href="" onClick={logOutHandler}><p>로그아웃</p></StyledLink>
                  <div className="iconWrap">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                      <path d="M1.12537 15.3159L0.527107 14.8636L0.527106 14.8636L1.12537 15.3159ZM2.50641 11.3814L1.75641 11.3723V11.3814H2.50641ZM2.53539 9.00259L3.28539 9.01173V9.00259H2.53539ZM19.882 15.335L20.4892 14.8948L20.4892 14.8948L19.882 15.335ZM18.5529 11.3814L17.8029 11.3718V11.3814H18.5529ZM18.5819 9.12047L19.3319 9.13008V9.12047H18.5819ZM1.72363 15.7682C2.49281 14.7508 3.25641 13.2325 3.25641 11.3814H1.75641C1.75641 12.8137 1.16342 14.022 0.527107 14.8636L1.72363 15.7682ZM3.25635 11.3906L3.28534 9.01173L1.78545 8.99345L1.75646 11.3723L3.25635 11.3906ZM20.4892 14.8948C19.8796 14.0539 19.3029 12.834 19.3029 11.3814H17.8029C17.8029 13.2347 18.5361 14.7564 19.2748 15.7752L20.4892 14.8948ZM19.3029 11.391L19.3319 9.13008L17.832 9.11085L17.803 11.3718L19.3029 11.391ZM19.3319 9.12047C19.3319 4.22481 15.3811 0.25 10.5 0.25V1.75C14.546 1.75 17.8319 5.0465 17.8319 9.12047H19.3319ZM19.3983 17.1875C20.0397 17.1875 20.4535 16.7351 20.6254 16.3294C20.7968 15.9248 20.8253 15.3583 20.4892 14.8948L19.2748 15.7752C19.2636 15.7598 19.2572 15.7456 19.2537 15.7352C19.2504 15.7252 19.25 15.7195 19.25 15.7192C19.25 15.7189 19.2501 15.7219 19.2491 15.7277C19.2481 15.7334 19.2463 15.7392 19.2442 15.7443C19.2386 15.7574 19.2379 15.7495 19.259 15.7328C19.2706 15.7236 19.2892 15.7118 19.3149 15.7024C19.3413 15.6927 19.3701 15.6875 19.3983 15.6875V17.1875ZM3.28539 9.00259C3.28539 4.99373 6.51884 1.75 10.5 1.75V0.25C5.6837 0.25 1.78539 4.17204 1.78539 9.00259H3.28539ZM1.60281 15.6875C1.63174 15.6875 1.66125 15.6929 1.68817 15.703C1.71433 15.7127 1.73288 15.7248 1.74425 15.734C1.7647 15.7504 1.76279 15.7572 1.7565 15.7419C1.75402 15.7358 1.75206 15.729 1.75094 15.7224C1.75041 15.7192 1.75016 15.7166 1.75006 15.7147C1.74995 15.7127 1.75002 15.7117 1.75002 15.7118C1.75002 15.7118 1.74992 15.7131 1.74941 15.7157C1.7489 15.7183 1.74793 15.7222 1.74613 15.7273C1.74244 15.7379 1.73552 15.7525 1.72363 15.7682L0.527106 14.8636C0.176336 15.3276 0.20115 15.9033 0.36905 16.3119C0.537178 16.7211 0.951049 17.1875 1.60281 17.1875V15.6875ZM19.3983 15.6875H1.60281V17.1875H19.3983V15.6875ZM13.55 16.4375C13.55 17.9459 12.2308 19.25 10.5 19.25V20.75C12.9666 20.75 15.05 18.8641 15.05 16.4375H13.55ZM10.5 19.25C8.76921 19.25 7.45 17.9459 7.45 16.4375H5.95C5.95 18.8641 8.03343 20.75 10.5 20.75V19.25Z" fill="black" fillOpacity="0.7"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M15.2788 15.4L19 19M17.8 9.4C17.8 14.0392 14.0392 17.8 9.4 17.8C4.76081 17.8 1 14.0392 1 9.4C1 4.76081 4.76081 1 9.4 1C14.0392 1 17.8 4.76081 17.8 9.4Z" stroke="black" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </MemberMenu>
              ) : <StyledLink href="" onClick={logOutHandler}>나가기</StyledLink>
              }
            </>
          ) : (
            <>
              <StyledLink href="" className="login" onClick={closeRegisterModal}>
                회원가입
              </StyledLink>
              <StyledLink href="" className="login" onClick={closeLoginModal}>
                로그인
              </StyledLink>
            </>
          )}
        </div>
      </HeaderSection>
      {/* state가 true면 만들어놓은 모달 컴포넌트를 화면에 띄운다. */}
      {/* FeedSearchModal로 state함수를 props로 전달한다. - 모달 내에서 모달을 나갈 수 있어야 하기 때문 */}
      {showRegisterModal && (
        <RegisterModal
          closeRegisterModal={closeRegisterModal}
          changeModal={changeModal}
        />
      )}
      {showLoginModal && (
        <LoginModal
          closeLoginModal={closeLoginModal}
          changeModal={changeModal}
        />
      )}
    </>
  );
};

export default Header;
