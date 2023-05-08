import {setRegister, setUser} from "@/redux/registerSlice";
import Image from "next/image";
import leftIc from "@/img/ic_arrow_left.png";
import rightIc from "@/img/ic_arrow_right.png";
import styled from "@emotion/styled";
import {FormContainerDiv, TitleBoxDiv} from "@/component/register/register.style";

interface propsType {
  dispatch: any;
}

const RegisterAdditionalInfo = ({dispatch}: propsType) => {
  const handleBackClick = ({e}: any) => {
    dispatch(setRegister("RegisterTags"))
  }
  const handleNextClick = ({e}: any) => {
    //e.preventDefault()
  }

  return (
    <>
      <Image src={leftIc} alt="이전" width={30} height={55} onClick={handleBackClick} style={{marginTop: "279px"}}/>
      <FormContainerDiv>
        <TitleBoxDiv><span>멘티님을 소개해주세요</span></TitleBoxDiv>
      </FormContainerDiv>
      <Image src={rightIc} alt="다음" width={30} height={55} onClick={handleNextClick} style={{marginTop: "279px"}}/>
    </>
  );
};

export default RegisterAdditionalInfo;