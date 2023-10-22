import { ProfileBtnContainerDiv } from "@/component/main/mentorProfileSection/profileCard.style";
import IcQuestion from "@/img/ic_send-question.svg";
import IcFollow from "@/img/ic_follow.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "@/states/stateUser";
import { authedTokenAxios, refreshTokenAPI } from "@/lib/jwt";
import { useSession } from "next-auth/react";
import { followEventState, mentoringState } from "@/states/stateMain";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { v5 } from "uuid";
import {
  nowSubscribeState,
  subscribeState,
  ISubscribe,
} from "@/states/stateSubscribe";
import axios from "axios";

interface propsType {
  nickname: string;
  imgUrl: any;
}
const ProfileBtnGroup = ({ nickname, imgUrl }: propsType) => {
  const mentorNickname: string = nickname;
  const user = useRecoilValue(userState);
  const [mentoring, setMentoring] = useRecoilState(mentoringState);
  const [followEvent, setFollowEvent] = useRecoilState(followEventState);
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const { data: sessionData, update: sessionUpdate } = useSession();
  const router = useRouter();
  const [chattingRooms, setChattingRooms] = useRecoilState(subscribeState);
  const [chattingMentor, setChattingMentor] = useRecoilState(nowSubscribeState);

  const followMentorAxios = async (
    sessionData: any,
    userName: string,
    mentorName: string
  ) => {
    try {
      const response = await authedTokenAxios(sessionData.accessToken).post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/follow/request`,
        {
          userNickname: userName,
          followNickname: mentorName,
        }
      );
      return response.data.message;
    } catch (error: any) {
      console.log(
        `${error.response?.data?.code}: ${error.response?.data?.message}`
      );
      refreshTokenAPI(sessionData, sessionUpdate).then();
    }
  };
  const isFollowingAxios = async (
    sessionData: any,
    userName: string,
    mentorName: string
  ) => {
    try {
      const response = await authedTokenAxios(sessionData.accessToken).get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/follow/check-status?userNickname=${userName}&followNickname=${mentorName}`
      );
      return response.data.data;
    } catch (error: any) {
      console.log(
        `${error.response?.data?.code}: ${error.response?.data?.message}`
      );
      if (!!sessionData?.accessToken) {
        refreshTokenAPI(sessionData, sessionUpdate).then();
      }
    }
  };
  const onClickQuestion = () => {
    if (!!user.name && !!mentorNickname) {
      setMentoring({ mentor: mentorNickname, mentee: user.name });
      createRoom(sessionData, mentorNickname);
      router
        .push({
          pathname: "/chatting",
          //query: {mentor: mentorNickname}
        })
        .then();
      console.log("질문!", mentoring);
    }
  };

  const onClickFollow = async () => {
    if (!!user.name && !!mentorNickname) {
      await followMentorAxios(sessionData, user.name!, mentorNickname).then(
        (response) => {
          console.log(response, followEvent);
          setFollowEvent({ followEvent: true });
        }
      );
    }
  };

  // 채팅방 신규입장
  const createRoom = async (sessionData: any, mentorName: string) => {
    const mentee: any = user.name;
    const mentor: string = mentorName;
    const randomSeed: string = mentee + "*" + mentor;
    const roomId: string = v5(randomSeed, v5.URL);

    const newRoom: ISubscribe = {
      roomId: roomId,
      imgUrl: imgUrl,
      nickname: mentorName,
      lastMessage: "",
      lastMessageTime: "",
    };
    setChattingMentor(newRoom);
    if (
      chattingRooms.find(
        (_chattingRooms) => _chattingRooms.nickname === mentor
      ) === undefined
    )
      setChattingRooms((chattingRooms) => [...chattingRooms, newRoom]);
    try {
      const res = await authedTokenAxios(sessionData.accessToken).post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/chat/room/enter`,
        {
          menteeNickname: mentee,
          mentorNickname: mentor,
          roomId: roomId,
        }
      );
      // .then((res) => {});
    } catch (error: any) {
      console.log(
        `${error.response?.data?.code}: ${error.response?.data?.message}`
      );
      refreshTokenAPI(sessionData, sessionUpdate).then();
    }
  };

  useEffect(() => {
    if (!!user.name && !!mentorNickname) {
      isFollowingAxios(sessionData, user.name!, mentorNickname).then(
        (response) => {
          setIsFollowing(response);
        }
      );
    }
  }, [isFollowingAxios, mentorNickname, sessionData, user.name]);

  return (
    <ProfileBtnContainerDiv className="column marginL83">
      <button className="btnQuestion" onClick={() => onClickQuestion()}>
        <div className="btnContent">
          <IcQuestion />
          질문하기
        </div>
      </button>
      <button
        className={`${isFollowing ? "btnFollowChecked" : "btnFollow"}`}
        onClick={() => onClickFollow()}
      >
        <div className="btnContent">
          <IcFollow />
          관심멘토
        </div>
      </button>
    </ProfileBtnContainerDiv>
  );
};
export default ProfileBtnGroup;
