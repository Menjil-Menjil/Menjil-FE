import styled from "@emotion/styled";
import {ProfileBox, ProfileContentBox} from "@/component/profile/profile.style";
import Image from "next/image";
import {useRecoilValue} from "recoil";
import {userState} from "@/states/stateUser";

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

const MyPage = () => {
  const user = useRecoilValue(userState);
  return (
    <MyPageContainerDiv>
      <ProfileBox>
        <ProfileContentBox>
          <div className="profileInfo">
            <Image src={user.image} alt={"profile"} width={80} height={80}
                   priority={true}
                   style={{
                     borderRadius: "12px",
                     objectFit: "cover"
                   }}/>
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
                    <div className="data field">
                      <div>프론트엔드</div>
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
        </ProfileContentBox>
      </ProfileBox>
    </MyPageContainerDiv>
  );
};
export default MyPage;