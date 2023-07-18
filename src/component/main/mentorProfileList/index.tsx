import {MentorProfileListTitleDiv, ProfileCardDiv} from "@/component/main/mentorProfileList/profileCard.style";
import styled from "@emotion/styled";
import ProfileContent from "@/component/main/mentorProfileList/profileContent";
import ProfileRecentQuestion from "@/component/main/mentorProfileList/profileRecentQuestion";
import ProfileBtnGroup from "@/component/main/mentorProfileList/profileBtnGroup";

export const MentorProfileListDiv = styled.div`
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
    <MentorProfileListDiv>
      <MentorProfileListTitleDiv>추천 멘토</MentorProfileListTitleDiv>
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
    </MentorProfileListDiv>
  );
}

export default MentorProfileList;