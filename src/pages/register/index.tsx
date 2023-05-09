import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import styled from "@emotion/styled";
import RegisterBasic from "@/component/register/registerBasic";
import RegisterEducation from "@/component/register/registerEducation";
import RegisterHeader from "../../component/register/registerHeader";
import RegisterTags from "@/component/register/registerTags";
import RegisterAdditionalInfo from "@/component/register/registerAdditionalInfo";

export const RegisterContainerDiv = styled.div`
  width: 1000px;
  min-height: 600px;
  margin: 5px 0 190px 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`

export const RegisterFormContainerDiv = styled.div`
  width: 100%;
  margin-top: 35px;
  display: flex;
  justify-content: space-around;
`

export const PageInformationDiv = styled.div`
  width: 667px;
  margin-top: 120px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
`;

const Register = () => {
  const registerComponent = useSelector((state: RootState) => state.register.component);
  const dispatch = useDispatch();
  const registerProgressNumber = (registerStep:string) => {
    if (registerStep==="RegisterBasic") {
      return 25;
    } else if (registerStep==="RegisterEducation") {
      return 50;
    } else if (registerStep==="RegisterTags") {
      return 75;
    } else if (registerStep==="RegisterAdditionalInfo") {
      return 100;
    } else return 0;
  };

  return (
    <>
      <RegisterContainerDiv>
        {(registerComponent!=="RegisterAdditionalInfo") &&
            <RegisterHeader progressNumber={registerProgressNumber(registerComponent)}/>
        }
        {(registerComponent==="RegisterAdditionalInfo") &&
            <PageInformationDiv>언제든 수정할 수 있으니 자유롭게 입력해주세요<br/>자세히 입력하면 더 정확한 멘토링을 받을 수 있어요</PageInformationDiv>
        }
        <RegisterFormContainerDiv>
          {registerComponent === "RegisterBasic" && <RegisterBasic dispatch={dispatch}/>}
          {registerComponent === "RegisterEducation" && <RegisterEducation dispatch={dispatch}/>}
          {registerComponent === "RegisterTags" && <RegisterTags dispatch={dispatch}/>}
          {registerComponent === "RegisterAdditionalInfo" && <RegisterAdditionalInfo dispatch={dispatch}/>}
        </RegisterFormContainerDiv>
      </RegisterContainerDiv>
    </>
  );
}

export default Register;