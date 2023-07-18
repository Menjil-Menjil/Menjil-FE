import styled from "@emotion/styled";
import MainBanner from "./mainBanner";
import MentorProfileList from "./mentorProfileList";
import UserProfile from "./userProfile";

export const MainContainerDiv = styled.div`
  width: 1728px;
  min-height: 1117px;
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContentsContainerDiv = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 30px;
`;

const Main = () => {
  return (
    <MainContainerDiv>

      <MainBanner/>

      <MainContentsContainerDiv>
        <MentorProfileList/>
        <UserProfile/>
      </MainContentsContainerDiv>

    </MainContainerDiv>
  );
};

export default Main;