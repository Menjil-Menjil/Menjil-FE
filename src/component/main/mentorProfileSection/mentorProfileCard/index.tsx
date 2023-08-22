import ProfileContent from "@/component/main/mentorProfileSection/mentorProfileCard/profileContent";
import ProfileRecentQuestion from "@/component/main/mentorProfileSection/mentorProfileCard/profileRecentQuestion";
import ProfileBtnGroup from "@/component/main/mentorProfileSection/mentorProfileCard/profileBtnGroup";
import {ProfileCardDiv} from "@/component/main/mentorProfileSection/profileCard.style";

const MentorProfileCard = (data: any) => {
  return (
    <ProfileCardDiv>
      <ProfileContent nickname={data.data.nickname}
                      major={data.data.major}
                      company={data.data.company}
                      field={data.data.field}
                      techStack={data.data.techStack}
                      imgUrl={data.data.imgUrl}/>
      <ProfileRecentQuestion />
      <ProfileBtnGroup />
    </ProfileCardDiv>
  );
}
export default MentorProfileCard;