import {
  FormContainerDiv, GoPageBtn,
  InputContainer,
  InputTextArea,
  SaveBtnContainer,
  TitleBoxDiv
} from "@/component/register/register.style";
import RightIc from "@/img/ic_arrow_right.svg";
import LeftIc from "@/img/ic_arrow_left.svg";
import {useContext} from "react";
import RegisterComponentContext from "@/context/RegisterComponentContext";

const RegisterAdditionalInfo = () => {
  const {setComponent} = useContext<any>(RegisterComponentContext);

  return (
    <>
      <GoPageBtn onClick={() => setComponent("RegisterTags")}><LeftIc/></GoPageBtn>
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
      <GoPageBtn><RightIc/></GoPageBtn>
    </>
  );
};

export default RegisterAdditionalInfo;