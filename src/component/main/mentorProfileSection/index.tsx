import {MentorProfileSectionTitleDiv, ProfileCardDiv} from "@/component/main/mentorProfileSection/profileCard.style";
import styled from "@emotion/styled";
import ProfileContent from "@/component/main/mentorProfileSection/profileContent";
import ProfileRecentQuestion from "@/component/main/mentorProfileSection/profileRecentQuestion";
import ProfileBtnGroup from "@/component/main/mentorProfileSection/profileBtnGroup";

export const MentorProfileSectionDiv = styled.div`
  width: 995px;
  height: 1148px;
  border-radius: 12px;
  border: 0 solid #BEBEBE;
  background: #FFF;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
`;

const MentorProfileList = () => {
  return (
    <MentorProfileSectionDiv>
      <MentorProfileSectionTitleDiv>추천 멘토</MentorProfileSectionTitleDiv>
      <ProfileCardDiv>
        <ProfileContent/>
        <ProfileRecentQuestion/>
        <ProfileBtnGroup/>
      </ProfileCardDiv>
      <ProfileCardDiv>
        <ProfileContent/>
        <ProfileRecentQuestion/>
        <ProfileBtnGroup/>
      </ProfileCardDiv>
      <ProfileCardDiv>
        <ProfileContent/>
        <ProfileRecentQuestion/>
        <ProfileBtnGroup/>
      </ProfileCardDiv>
    </MentorProfileSectionDiv>
  );
}

export default MentorProfileList;