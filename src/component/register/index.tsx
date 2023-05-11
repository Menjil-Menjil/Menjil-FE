import styled from "@emotion/styled";
import RegisterHeader from "@/component/register/registerHeader";
import RegisterBasic from "@/component/register/registerBasic";
import RegisterEducation from "@/component/register/registerEducation";
import RegisterTags from "@/component/register/registerTags";
import RegisterAdditionalInfo from "@/component/register/registerAdditionalInfo";
import {useContext} from "react";
import RegisterComponentContext from "@/context/RegisterComponentContext";

export const RegisterContainerDiv = styled.div`
  width: 1000px;
  min-height: 600px;
  margin: 5px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  user-select: none;
`

export const RegisterFormContainerDiv = styled.div`
  width: 100%;
  margin-top: 35px;
  margin-bottom: 100px;
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
  const {component} = useContext<any>(RegisterComponentContext);
  const registerProgressNumber = (registerStep:string) => {
    if (registerStep==="RegisterBasic") {
      return 33;
    } else if (registerStep==="RegisterEducation") {
      return 66;
    } else if (registerStep==="RegisterTags") {
      return 100;
    } else if (registerStep==="RegisterAdditionalInfo") {
      return 100;
    } else return 0;
  };

  return(
    <RegisterContainerDiv>
      {(component!=="RegisterAdditionalInfo") &&
          <RegisterHeader progressNumber={registerProgressNumber(component)}/>
      }
      {(component==="RegisterAdditionalInfo") &&
          <PageInformationDiv>언제든 수정할 수 있으니 자유롭게 입력해주세요<br/>자세히 입력하면 더 정확한 멘토링을 받을 수 있어요</PageInformationDiv>
      }
      <RegisterFormContainerDiv>
        {component === "RegisterBasic" && <RegisterBasic/>}
        {component === "RegisterEducation" && <RegisterEducation/>}
        {component === "RegisterTags" && <RegisterTags/>}
        {component === "RegisterAdditionalInfo" && <RegisterAdditionalInfo/>}
      </RegisterFormContainerDiv>
    </RegisterContainerDiv>
  );
};

export default Register;