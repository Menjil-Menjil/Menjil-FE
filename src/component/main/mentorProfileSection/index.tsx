import {MentorProfileSectionTitleDiv} from "@/component/main/mentorProfileSection/profileCard.style";
import styled from "@emotion/styled";
import {useCallback, useEffect, useState} from "react";
import {authedTokenAxios, refreshTokenAPI} from "@/lib/jwt";
import {useSession} from "next-auth/react";
import {userState} from "@/states/stateUser";
import {useRecoilValue} from "recoil"
import MentorProfileCard from "@/component/main/mentorProfileSection/mentorProfileCard";
import useIntersect from "@/hooks/useIntersect";
import defaultProfileImg from "@/img/img_default-profile.png"

export const MentorProfileSectionDiv = styled.div`
  width: 995px;
  height: auto;
  border-radius: 12px;
  border: 0 solid var(--textline-color);
  background: white;
  box-shadow: 0 0 4px 0 var(--box-shadow);
  display: flex;
  flex-direction: column;
`;

const MentorProfileList = () => {
  const [mentorProfileDataList, setMentorProfileDataList] = useState<any[]>([]);
  const defaultProfileDataList = [
    {
      nickname: "멘토멘토",
      major: "컴퓨터공학과",
      company: "멘질멘질",
      field: "기본정보",
      techStack: "기본정보",
      imgUrl: defaultProfileImg,
    }
  ];
  const {data: sessionData, update: sessionUpdate} =useSession();
  const user = useRecoilValue(userState);
  const [page, setPage] = useState<number>(0);
  const [isFetching, setFetching] = useState(false);
  const [hasNextPage, setNextPage] = useState(true);

  const mentorDataAxios = async (sessionData: any, index: number) => {
    try {
      return await authedTokenAxios(sessionData.accessToken)
        .get(`${process.env.NEXT_PUBLIC_API_URL}/api/main/mentors?nickname=${user.name}&page=${index}`)
    } catch (error: any) {
      console.log(`${error.response?.data?.code}: ${error.response?.data?.message}`)
      refreshTokenAPI(sessionData, sessionUpdate).then()
    }
  };
  const fetchUsers = useCallback(async (userName: any, session: any) => {
    if (userName && session?.error === undefined) {

      mentorDataAxios(session, page).then((result) => {
        const contentData = result?.data.data.content
        const pageableData = result?.data.data
        setMentorProfileDataList(mentorProfileDataList.concat(contentData))
        setPage(pageableData.pageable.pageNumber + 1)
        setNextPage(!pageableData.last)
        setFetching(false)
      })
    } else {
      setPage(0)
    }
  }, [page]);

  const ref = useIntersect( async (entry, observer) => {
    observer.unobserve(entry.target)
    if (hasNextPage && !isFetching) {
      setFetching(true)
    }
  })

  useEffect(() => {
    if (isFetching && hasNextPage) fetchUsers(user.name, sessionData).then()
    else if (!hasNextPage) setFetching(false)
  }, [fetchUsers, hasNextPage, isFetching, sessionData, user.name]);

  const Target = styled.div`
    height: 1px;
  `
  return (
    <MentorProfileSectionDiv>
      <MentorProfileSectionTitleDiv>추천 멘토</MentorProfileSectionTitleDiv>
      {user.name ?
        mentorProfileDataList.map((data: any, index: number) => {
          return <MentorProfileCard key={index} data={data}></MentorProfileCard>
        }) :
        <>
          {defaultProfileDataList.map((data: any, index: number) => {
            return <MentorProfileCard key={index} data={data}></MentorProfileCard>
          })}
          <div>로그인 필요</div>
        </>
      }
      {(!!user.name && isFetching) && <div>loading</div>}
      <Target ref={ref}></Target>
    </MentorProfileSectionDiv>
  );
}

export default MentorProfileList;