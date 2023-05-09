import {setRegister, setUser} from "@/redux/registerSlice";
import Image from "next/image";
import leftIc from "@/img/ic_arrow_left.png";
import rightIc from "@/img/ic_arrow_right.png";
import styled from "@emotion/styled";
import {
  FormContainerDiv,
  InputContainer,
  InputTextArea,
  SaveBtnContainer,
  TitleBoxDiv
} from "@/component/register/register.style";

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
        <InputContainer>
          <div className="titleBox">경력</div>
          <InputTextArea placeholder="예) 인턴, 연구실 등"></InputTextArea>
          <div className="titleBox">자격증</div>
          <InputTextArea placeholder="예) TOIEC, TOEFL, 기사 등"></InputTextArea>
          <div className="titleBox">수상내역</div>
          <InputTextArea placeholder="예) 공모전, 해커톤 등"></InputTextArea>
          <div className="titleBox">대외활동</div>
          <InputTextArea placeholder="예) 소마, 서포터즈 등"></InputTextArea>
        </InputContainer>
        <SaveBtnContainer>
          <button className="afterBtn">다음에 작성하기</button>
          <button className="saveBtn">저장</button>
        </SaveBtnContainer>
      </FormContainerDiv>
      <Image src={rightIc} alt="다음" width={30} height={55} onClick={handleNextClick} style={{marginTop: "279px"}}/>
    </>
  );
};

export default RegisterAdditionalInfo;