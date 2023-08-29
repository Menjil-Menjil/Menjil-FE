import styled from "@emotion/styled";
import Link from "next/link";
import { useEffect, useState } from "react";
import RegisterModal from "./modal/registerModal";
import LoginModal from "./modal/loginModal";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState, useResetRecoilState } from "recoil";
import {userState} from "@/states/state";

const HeaderSection = styled.header`
  width: 1728px;
  height: 60px;
  margin: 0 auto;
  top: 0;
  border-bottom: 1px solid var(--section-border);
  display: flex;
  position: sticky;
  z-index: 1;
  background-color: white;
  align-items: center;
  user-select: none;
  font-weight: 700;
  font-size: 20px;
  .category {
    display: flex;
    gap: 60px;
    align-items: center;
    flex-grow: 1;
    .logo {
      margin-left: 200px;
      font-family: var(--logo-font);
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 54px;
      color: var(--theme-color);
    }
  }
  .member {
    display: flex;
    margin-left: 90px;
    gap: 30px;
    .login {
      margin-right: 200px;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #3f3f3f;
  white-space: nowrap;
`;

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
          <StyledLink className="logo" href="/">
            menjil
          </StyledLink>
          <StyledLink
            className="chatting"
            href="/chatting"
            // onClick={getChatList}
          >
            멘토링
          </StyledLink>
          <StyledLink className="follows" href="/follows">
            관심 멘토
          </StyledLink>
          <StyledLink className="community" href="/community">
            커뮤니티
          </StyledLink>
        </div>
        <div className="member">
          {sessionData?.user ? (
            <StyledLink href="" className="login" onClick={logOutHandler}>
              {sessionData.accessToken ? "로그아웃" : "나가기"}
            </StyledLink>
          ) : (
            <>
              <StyledLink
                href=""
                className="register"
                onClick={closeRegisterModal}
              >
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
