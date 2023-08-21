import {MentorProfileSectionTitleDiv, ProfileCardDiv} from "@/component/main/mentorProfileSection/profileCard.style";
import styled from "@emotion/styled";
import ProfileContent from "@/component/main/mentorProfileSection/profileContent";
import ProfileRecentQuestion from "@/component/main/mentorProfileSection/profileRecentQuestion";
import ProfileBtnGroup from "@/component/main/mentorProfileSection/profileBtnGroup";
import {useEffect, useState} from "react";
import {authedTokenAxios, refreshTokenAPI} from "@/lib/jwt";
import {getSession, useSession} from "next-auth/react";

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
  const [mentorProfileDataList, setMentorProfileDataList] = useState();
  const {data: sessionData, update: sessionUpdate} =useSession();

  useEffect(() => {
    const mentorDataAxios = async (sessionData: any) => {
      try {
        const result = await authedTokenAxios(sessionData.accessToken)
          .get(`${process.env.NEXT_PUBLIC_API_URL}/api/main/userinfo?nickname=hello&page=0`)
        setMentorProfileDataList(result.data.data.content)
      } catch (error: any) {
        console.log(`${error.response?.data?.code}: ${error.response?.data?.message}`)
        refreshTokenAPI(sessionData, sessionUpdate).then(() => {})
      }
    };
    const session = getSession().then();

    mentorDataAxios(session).then(()=>{
      console.log(mentorProfileDataList)
    });
  },[mentorProfileDataList, sessionUpdate]);

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