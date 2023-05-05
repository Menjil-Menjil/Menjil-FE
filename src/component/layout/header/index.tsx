import styled from "@emotion/styled";
import Link from "next/link";
import { Prompt } from "next/font/google";
import {useState} from "react";
import LoginModal from "@/component/layout/header/loginModal";

const HeaderSection = styled.header`
  width: 1000px;
  height: 110px;
  margin: 0 auto;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  align-items: center;
  .category {
    display: flex;
    gap: 30px;
    align-items: center;
    flex-grow: 1;
    .logo {
      margin: 0 10px;
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
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Header = () => {
  // 모달 버튼 클릭 유무를 저장할 state
  const [showModal, setShowModal] = useState(false)

  // 버튼 클릭시 모달 버튼 클릭 유무를 설정하는 state 함수
  const clickModal = () => setShowModal(!showModal)

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
          <StyledLink className="shop" href="/register">
            회원가입
          </StyledLink>
          <div className="login" onClick={clickModal}>
            로그인
          </div>
        </div>
      </HeaderSection>
      {/* state가 true면 만들어놓은 모달 컴포넌트를 화면에 띄운다. */}
      {/* FeedSearchModal로 state함수를 props로 전달한다. - 모달 내에서 모달을 나갈 수 있어야 하기 때문 */}
      {showModal && <LoginModal clickModal={clickModal} />}
    </>
  );
};

export default Header;