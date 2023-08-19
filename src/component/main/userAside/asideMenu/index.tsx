import {AsideBtnGroup, ChattingListDiv} from "@/component/main/userAside/userAside.style";
import ChattingCard from "@/component/main/userAside/asideMenu/chattingCard";
import {getSession, useSession} from "next-auth/react";
import {authedTokenAxios, refreshTokenAPI} from "@/lib/jwt";
import {useEffect, useState} from "react";
import {userState} from "@/states/state";
import {useRecoilValue} from "recoil"

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
  const userName = useRecoilValue(userState).name;
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
          //.get(`${process.env.NEXT_PUBLIC_API_URL}/api/main/userinfo?nickname=${userName}`)
        setChatLogDataList(result.data.data)
      } catch (error: any) {
        console.log(`${error.response?.data?.code}: ${error.response?.data?.message}`)
        refreshTokenAPI(sessionData, sessionUpdate).then(() => {})
      }
    };
    const session = getSession().then();

    chatLogAxios(session).then(()=>{});
  }, [sessionUpdate]);

  return (
    <>
      <AsideBtnGroup>
        <Radio value="mentors" defaultChecked onChange={handleChange}>관심멘토</Radio>
        <Radio value="chat" defaultChecked={false} onChange={handleChange}>채팅목록</Radio>
        <button className="btnStyle" onClick={tokenAxios}>더보기</button>
      </AsideBtnGroup>
      {menuComponent === "mentors" && (
        <></>
      )}
      {menuComponent === "chat" && (
        <ChattingListDiv>
          {chatLogDataList && chatLogDataList.map((data: any, index: number) => {
            if(index < 3) {
              return <ChattingCard key={index} data={data} index={index}/>
            }
          })}
        </ChattingListDiv>
      )}
    </>
  );
};
export default AsideMenu;