import styled from "@emotion/styled";
import FollowCard from "@/component/follows/followCard";
import {authedTokenAxios, refreshTokenAPI} from "@/lib/jwt";
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import {useRecoilValue} from "recoil";
import {userState} from "@/states/stateUser";
import {followEventState} from "@/states/stateMain";
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
  const followEvent = useRecoilValue(followEventState);
  const [followingList, setFollowingList] = useState<any[]>();
  const {data: sessionData, update: sessionUpdate} =useSession();
  const myMentorAxios = async (sessionData: any) => {
    try {
      const result = await authedTokenAxios(sessionData.accessToken)
        .get(`${process.env.NEXT_PUBLIC_API_URL}/api/main/following?nickname=${user.name}`)
      setFollowingList(result.data.data)
    } catch (error: any) {
      console.log(`${error.response?.data?.code}: ${error.response?.data?.message}`)
      refreshTokenAPI(sessionData, sessionUpdate).then()
    }
  };

  useEffect(() => {
    if (!!user.name && !!sessionData?.user) {
      myMentorAxios(sessionData).then();
    }
  }, [followEvent, sessionData, user.name])

  return (
    <FollowsContainerDiv>
      <div className="cardList">
        {followingList && followingList.map((data, index) => {
          return (
            <FollowCard key={index} profileData={data} lastAnswerList={[]}/>
          )
        })}
      </div>

    </FollowsContainerDiv>
  );

};

export default Follows;