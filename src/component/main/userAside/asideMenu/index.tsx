import {AsideBtnGroup, AsideListDiv} from "@/component/main/userAside/userAside.style";
import ChattingCard from "@/component/main/userAside/asideMenu/chattingCard";
import {useSession} from "next-auth/react";
import {authedTokenAxios, refreshTokenAPI} from "@/lib/jwt";
import {useEffect, useState} from "react";
import {userState} from "@/states/state";
import {useRecoilValue} from "recoil"
import styled from "@emotion/styled";
import FollowingCard from "@/component/main/userAside/asideMenu/followingCard";

export const AsideMenuContainer = styled.div`
  height: 323px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background: var(--aside-menu-bg-color);
`;

interface RadioElementType {
  children: any,
  value: string,
  defaultChecked: boolean,
  onChange: any
}
const Radio = ({ children, value, defaultChecked, onChange }: RadioElementType) => {
  return (
    <>
      <input
        id={value}
        type="radio"
        name="menu"
        value={value}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      <label htmlFor={value}>
        {children}
      </label>
    </>
  );
}

const AsideMenu = () => {
  const {data: sessionData, update: sessionUpdate} =useSession();
  const [chatLogDataList, setChatLogDataList] = useState<any[]>();
  const user = useRecoilValue(userState);
  const tokenAxios = async () => {
    const test_url = `${process.env.NEXT_PUBLIC_API_URL}/api/user/token-test`
    if (sessionData?.accessToken) {
      try {
        const response = await authedTokenAxios(sessionData.accessToken).post(test_url, "None")
        console.log(response.data.message, "!")
      } catch (error: any) {
        console.log(`${error.response.data?.code}: ${error.response.data?.message}`)
        refreshTokenAPI(sessionData, sessionUpdate).then(() => {})
      }
    }
  };
  const [menuComponent, setMenuComponent] = useState("mentors");
  const handleChange = (e: any) => {
    setMenuComponent(e.target.value)
  };

  useEffect(() => {
    const chatLogAxios = async (sessionData: any) => {
      try {
        const result = await authedTokenAxios(sessionData.accessToken)
          .get(`${process.env.NEXT_PUBLIC_API_URL}/api/main/userinfo?nickname=hello`)
          //.get(`${process.env.NEXT_PUBLIC_API_URL}/api/main/userinfo?nickname=${user.name}`)
        setChatLogDataList(result.data.data)
      } catch (error: any) {
        console.log(`${error.response?.data?.code}: ${error.response?.data?.message}`)
        console.log(error.response)
        refreshTokenAPI(sessionData, sessionUpdate).then()
      }
    };
    if (!!user.name) {
      chatLogAxios(sessionData).then();
    }
  }, [user.name]);

  return (
    <AsideMenuContainer>
      <AsideBtnGroup>
        <div className="radioBtnGroup">
          <Radio value="mentors" defaultChecked onChange={handleChange}>관심멘토</Radio>
          <Radio value="chat" defaultChecked={false} onChange={handleChange}>채팅목록</Radio>
        </div>
        <button className="btnStyle" onClick={tokenAxios}>더보기</button>
      </AsideBtnGroup>
      {menuComponent === "mentors" && (
        <AsideListDiv>
          <FollowingCard/>
          <FollowingCard/>
        </AsideListDiv>
      )}
      {menuComponent === "chat" && (
        <AsideListDiv>
          {chatLogDataList && chatLogDataList.map((data: any, index: number) => {
            if(index < 3) {
              return <ChattingCard key={index} data={data}/>
            }
          })}
        </AsideListDiv>
      )}
    </AsideMenuContainer>
  );
};
export default AsideMenu;