import {AsideBtnGroup, ChattingListDiv} from "@/component/main/userAside/userAside.style";
import ChattingCard from "@/component/main/userAside/asideMenu/chattingCard";
import {useSession} from "next-auth/react";
import {authedTokenAxios, refreshTokenAPI} from "@/lib/jwt";
import {useState} from "react";

const Radio = ({ children, value, defaultChecked, onChange }) => {
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
  const handleChange = (e) => {
    setMenuComponent(e.target.value)
  };

  return (
    <>
      <AsideBtnGroup>
        <Radio value="mentors" defaultChecked onChange={handleChange}>관심멘토</Radio>
        <Radio value="chat" onChange={handleChange}>채팅목록</Radio>
        <button className="btnStyle" onClick={tokenAxios}>더보기</button>
      </AsideBtnGroup>
      {menuComponent === "mentors" && (
        <></>
      )}
      {menuComponent === "chat" && (
        <ChattingListDiv>
          <ChattingCard/>
          <ChattingCard/>
        </ChattingListDiv>
      )}
    </>
  );
};
export default AsideMenu;