import {FollowingCardDiv} from "@/component/main/userAside/userAside.style";
import Image from "next/image";
import unfollowIc from "@/img/ic_unfollow.png"
import {Fragment, useEffect, useState} from "react";
import {authedTokenAxios, refreshTokenAPI} from "@/lib/jwt";
import {useSession} from "next-auth/react";
import {useRecoilState} from "recoil";
import {followEventState} from "@/states/stateMain";

interface propsType {
  data: any;
  userName: string;
}
const FollowingCard = ({data, userName}: propsType) => {
  const mentorData: any = data;
  const [techStackList, setTechStackList] = useState<string[]>();
  const {data: sessionData, update: sessionUpdate} =useSession();
  const [, setFollowEvent] = useRecoilState(followEventState);
  const onClickUnfollowBtn = async (sessionData: any, userName: string, mentorName: string) => {
    try {
      await authedTokenAxios(sessionData.accessToken)
        .post(`${process.env.NEXT_PUBLIC_API_URL}/api/follow/request`, {
          userNickname: userName,
          followNickname: mentorName,
        })
      setFollowEvent({followEvent: true})
    } catch (error: any) {
      console.log(`${error.response?.data?.code}: ${error.response?.data?.message}`)
      refreshTokenAPI(sessionData, sessionUpdate).then()
    }
  };

  useEffect(() => {
    setTechStackList(mentorData.techStack.split(", "))
  }, [mentorData.techStack]);

  return (
    <FollowingCardDiv>
      <Image src={mentorData.imgUrl} alt="profileImg" width={35} height={35} style={{borderRadius: 9, objectFit: "cover"}}/>
      <div className="content">
        <div className="wrapper">
          <div className="title">{mentorData.nickname}</div>
          <div className="line"></div>
          <div className="textStyle">{mentorData.company}</div>
        </div>
        <p className="techStack">
          {techStackList && techStackList.map((data: any, index: number) => {
            if (index < 4) {
              return <Fragment key={index}>{data}<span/></Fragment>
            }
          })}
        </p>
      </div>
      <Image src={unfollowIc} alt="unfollow"
             className="unfollowBtn" width={16} height={16}
             onClick={() => onClickUnfollowBtn(sessionData, userName, mentorData.nickname)}/>
    </FollowingCardDiv>
  );
};
export default FollowingCard;