import styled from "@emotion/styled";
import MainBanner from "./mainBanner";
import MentorProfileList from "./mentorProfileSection";
import UserAside from "@/component/main/userAside";

export const MainContainerDiv = styled.div`
  width: 1728px;
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContentsContainerDiv = styled.div`
  min-height: 1000px;
  margin: 40px 0;
  display: flex;
  gap: 30px;
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