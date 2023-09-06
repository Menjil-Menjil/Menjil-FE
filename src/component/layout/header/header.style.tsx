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
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #3f3f3f;
  white-space: nowrap;
`;