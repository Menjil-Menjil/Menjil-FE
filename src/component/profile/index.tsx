import styled from "@emotion/styled";
import {ProfileBox, ProfileContentBox} from "@/component/profile/profile.style";
import Image from "next/image";
import {useRecoilValue} from "recoil";
import {userState} from "@/states/stateUser";
import {useState} from "react";
import ProfileCareer from "@/component/profile/profileCareer";
import settingIc from "@/img/settings.png"

export const MyPageContainerDiv = styled.div`
  width: 1300px;
  min-height: 600px;
  margin: 68px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
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

const MyPage = () => {
  const user = useRecoilValue(userState);
  const [menuComponent, setMenuComponent] = useState<string>("career");
  const handleMenuChange = (e: any) => {
    setMenuComponent(e.target.value)
  };

  return (
    <MyPageContainerDiv>
      <ProfileBox>
        <ProfileContentBox>
          <div className="profileInfo">
            {user.image &&
                <Image src={user.image} alt={"profile"} width={80} height={80}
                       priority={true}
                       style={{
                          borderRadius: "12px",
                          objectFit: "cover"
                        }}
                />}
            <button className="btnSetting" >
              <Image src={settingIc} alt="btn" width={15} height={15}/>
            </button>
            <div className="wrap">
              <div className="titleWrap">
                <div className="role">{"멘티"}</div>
                <p className="nickname">{user.name}</p>
              </div>
              <div className="contentWrap">
                <div className="skillInfo">
                  <div className="skillBox">학력・전공
                    <div className="data emphasis">
                      {user.school}
                    </div>
                    <div className="data">
                      <div className="majorTag">주</div>
                      {user.major}
                    </div>
                    {/*{user.subMajor &&*/}
                    {/*    <div className="data">*/}
                    {/*        <div className="majorTag">복수</div>*/}
                    {/*      {user.subMajor}*/}
                    {/*    </div>*/}
                    {/*}*/}
                    {/*{user.minor &&*/}
                    {/*    <div className="data">*/}
                    {/*        <div className="majorTag">부</div>*/}
                    {/*      {user.minor}*/}
                    {/*    </div>*/}
                    {/*}*/}
                  </div>
                  <div className="skillBox">관심분야
                    <div className="data techData">
                      <div className="field">프론트엔드</div>
                    </div>
                  </div>
                  <div className="skillBox">기술스택
                    <div className="data techData">
                      {"React, Redux, GitHub, Next.JS".split(", ").map((data: string, index: number) => {
                        return (
                          <div key={index} className="techStack">{data}</div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btnGroup">
            <Radio value="career" defaultChecked onChange={handleMenuChange}>경력</Radio>
            <Radio value="certificate" defaultChecked={false} onChange={handleMenuChange}>자격증</Radio>
            <Radio value="awards" defaultChecked={false} onChange={handleMenuChange}>수상내역</Radio>
            <Radio value="activity" defaultChecked={false} onChange={handleMenuChange}>대외활동</Radio>
          </div>
        </ProfileContentBox>
        {menuComponent === "career" && (
          <ProfileCareer careerData={undefined} title={""} subtitle={undefined}/>
        )}
        {menuComponent === "certificate" && (
          <>certificate</>
        )}
        {menuComponent === "awards" && (
          <>awards</>
        )}
        {menuComponent === "activity" && (
          <ProfileCareer careerData={undefined} title={""} subtitle={undefined}/>
        )}
      </ProfileBox>
    </MyPageContainerDiv>
  );
};
export default MyPage;