import styled from "@emotion/styled";
import Link from "next/link";
import { useState } from "react";
import RegisterModal from "./modal/registerModal";
import LoginModal from "./modal/loginModal";
import {signOut, useSession} from "next-auth/react";

const HeaderSection = styled.header`
  width: 100%;
  height: 110px;
  margin: 0 auto;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  align-items: center;
  user-select: none;
  font-family: "Pretendard";
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
    gap: 30px;
    .login {
      margin-right: 200px;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #3f3f3f;
`;
const StyledDiv = styled.div`
  cursor: pointer;
  color: #3f3f3f;
`;

const Header = () => {
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

  const { data, status } = useSession();

  return (
    <>
      <HeaderSection>
        <div className="category">
          <StyledLink className="logo" href="/">
            menjil
          </StyledLink>
          <StyledLink className="channel" href="/channel">
            채널
          </StyledLink>
          <StyledLink className="chatting" href="/chatting">
            채팅
          </StyledLink>
          <StyledLink className="recruit" href="/recruit">
            채용소식
          </StyledLink>
          <StyledLink className="community" href="/community">
            커뮤니티
          </StyledLink>
        </div>
        <div className="member">
          {/* <StyledLink href="/register">회원가입</StyledLink> */}
          {data?.user ? (
            <StyledDiv onClick={() => signOut()}>
              로그아웃
            </StyledDiv>
          ) : (
            <>
              <StyledLink href="" className="register" onClick={closeRegisterModal}>
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