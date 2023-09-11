import ProfileContent from "@/component/main/mentorProfileSection/mentorProfileCard/profileContent";
import ProfileRecentQuestion from "@/component/main/mentorProfileSection/mentorProfileCard/profileRecentQuestion";
import ProfileBtnGroup from "@/component/main/mentorProfileSection/mentorProfileCard/profileBtnGroup";
import {ProfileCardDiv} from "@/component/main/mentorProfileSection/profileCard.style";

interface propsType {
  data: any,
}
const MentorProfileCard = ({data}: propsType) => {
  return (
    <ProfileCardDiv>
      <ProfileContent nickname={data.nickname}
                      major={data.major}
                      company={data.company}
                      field={data.field}
                      techStack={data.techStack}
                      imgUrl={data.imgUrl}/>
      <ProfileRecentQuestion lastAnswerList={data.lastAnsweredMessages}/>
      <ProfileBtnGroup nickname={data.nickname}/>
    </ProfileCardDiv>
  );
}
export default MentorProfileCard;