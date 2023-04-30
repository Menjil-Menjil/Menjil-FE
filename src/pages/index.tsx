import styled from "@emotion/styled";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const StyledWrap = styled.div`
  background-color: hotpink;
  div {
    font-size: 24px;
  }
`;

const Home = () => {
  return (
    <StyledWrap>
      <h2>블로그 Home</h2>
      <div>Blog</div>
    </StyledWrap>
  );
};

export default Home;
