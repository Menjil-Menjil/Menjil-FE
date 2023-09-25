import styled from "@emotion/styled";
import FollowCard from "@/component/follows/followCard";
import {authedTokenAxios, refreshTokenAPI} from "@/lib/jwt";
import {useCallback, useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import {useRecoilValue} from "recoil";
import {userState} from "@/states/stateUser";
import useIntersect from "@/hooks/useIntersect";
export const FollowsContainerDiv = styled.div`
  width: 1300px;
  min-height: 600px;
  margin: 91px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  .cardList {
    width: 1215px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;
  }
`;

const Follows = () => {
  const user = useRecoilValue(userState);
  const [followingList, setFollowingList] = useState<any[]>([]);
  const {data: sessionData, update: sessionUpdate} =useSession();
  const [page, setPage] = useState<number>(0);
  const [isFetching, setFetching] = useState(false);
  const [hasNextPage, setNextPage] = useState(true);
  const myMentorAxios = async (sessionData: any, index: number) => {
    try {
      return await authedTokenAxios(sessionData.accessToken)
        .get(`${process.env.NEXT_PUBLIC_API_URL}/api/following?nickname=${user.name}&page=${index}`)
    } catch (error: any) {
      console.log(`${error.response?.data?.code}: ${error.response?.data?.message}`)
      refreshTokenAPI(sessionData, sessionUpdate).then()
    }
  };
  const fetchUsers = useCallback(async (userName: any, session: any) => {
    if (userName && session?.error === undefined) {
      myMentorAxios(session, page).then((result) => {
        const contentData = result?.data.data.content
        const pageableData = result?.data.data
        setFollowingList(followingList.concat(contentData))
        setPage(pageableData.pageable.pageNumber + 1)
        setNextPage(!pageableData.last)
        setFetching(false)
      })
    } else {
      setPage(0)
    }
  }, [followingList, myMentorAxios, page]);

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
    <FollowsContainerDiv>
      <div className="cardList">
        {followingList && followingList.map((data, index) => {
          return (
            <FollowCard key={index}
                        profileData={data.followingUserInfo}
                        recentAnswerList={data.lastAnsweredMessages}
                        followers={data.followersCount}
                        answers={data.answersCount}/>
          )
        })}
      </div>
      <Target ref={ref}></Target>
    </FollowsContainerDiv>
  );

};

export default Follows;