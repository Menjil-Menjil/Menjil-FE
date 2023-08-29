import styled from "@emotion/styled";
import MainBanner from "./mainBanner";
import MentorProfileList from "./mentorProfileSection";
import UserAside from "@/component/main/userAside";

export const MainContainerDiv = styled.div`
  width: 1728px;
  min-height: 1117px;
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContentsContainerDiv = styled.div`
  margin: 50px 0;
  display: flex;
  gap: 40px;
`;

const Main = () => {
  return (
    <MainContainerDiv>
      <MainBanner/>
      <MainContentsContainerDiv>
        <MentorProfileList/>
        <UserAside/>
      </MainContentsContainerDiv>
    </MainContainerDiv>
  );
};

export default Main;