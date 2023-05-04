import styled from "@emotion/styled";
import Link from "next/link";
import { Prompt } from "next/font/google";

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
  return (
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
        <StyledLink className="login" href="/login">
            로그인
        </StyledLink>
      </div>
    </HeaderSection>
  );
};

export default Header;