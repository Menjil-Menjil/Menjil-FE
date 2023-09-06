import styled from "@emotion/styled";
import Link from "next/link";

export const HeaderSection = styled.header`
  height: 60px;
  margin: 0 auto;
  top: 0;
  border-bottom: 1px solid var(--section-border);
  display: flex;
  position: sticky;
  z-index: 1;
  background-color: white;
  align-items: center;
  justify-content: space-around;
  gap: 280px;
  user-select: none;
  font-weight: 700;
  font-size: 20px;
  .category {
    display: flex;
    gap: 60px;
    align-items: center;
    .logo {
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
      color: black;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #3f3f3f;
  white-space: nowrap;
`;

export const MemberMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: black;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 22.5px */
  p { margin: 0; padding: 0; }
  .line {
    width: 1px;
    height: 14px;
    margin: 0 7px;
    background: #BEBEBE;
  }
  .iconWrap {
    display: flex;
    margin: 25px;
    gap: 25px;
    svg {
      cursor: pointer;
    }
  }
`;