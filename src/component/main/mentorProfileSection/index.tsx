import {MentorProfileSectionTitleDiv} from "@/component/main/mentorProfileSection/profileCard.style";
import styled from "@emotion/styled";
import {useEffect, useState} from "react";
import {authedTokenAxios, refreshTokenAPI} from "@/lib/jwt";
import {useSession} from "next-auth/react";
import {userState} from "@/states/state";
import {useRecoilValue} from "recoil"
import MentorProfileCard from "@/component/main/mentorProfileSection/mentorProfileCard";

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
  let [mentorProfileDataList, setMentorProfileDataList] = useState<any[]>([]);
  const {data: sessionData, update: sessionUpdate} =useSession();
  const user = useRecoilValue(userState);
  const [pageIndex, setPageIndex] = useState<number>(0)

  useEffect(() => {
    const mentorDataAxios = async (sessionData: any, index: number) => {
      try {
        const result = await authedTokenAxios(sessionData.accessToken)
          .get(`${process.env.NEXT_PUBLIC_API_URL}/api/main/mentors?nickname=${"hello"}&page=${index}`)
          //.get(`${process.env.NEXT_PUBLIC_API_URL}/api/main/mentors?nickname=${userName}&page=${index}`)
        setMentorProfileDataList(mentorProfileDataList.concat(result.data.data.content))
      } catch (error: any) {
        console.log(`${error.response?.data?.code}: ${error.response?.data?.message}`)
        refreshTokenAPI(sessionData, sessionUpdate).then()
      }
    };

    if (user.name && sessionData?.error === undefined) {
      if (pageIndex < 2) {
        mentorDataAxios(sessionData, pageIndex).then(() => {
          setPageIndex(pageIndex + 1)
        })
      }
    } else {
      setPageIndex(0)
    }
  },[mentorProfileDataList, user]);

  return (
    <MentorProfileSectionDiv>
      <MentorProfileSectionTitleDiv>추천 멘토</MentorProfileSectionTitleDiv>
      {(user.name && mentorProfileDataList) ?
        mentorProfileDataList.map((data: any, index: number) => {
          return <MentorProfileCard key={index} data={data}></MentorProfileCard>
        }) :
        <>
          <div>로그인 필요</div>
        </>
      }
    </MentorProfileSectionDiv>
  );
}

export default MentorProfileList;