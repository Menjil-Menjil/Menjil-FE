import {
  FormContainerDiv,
  GoPageBtn,
  InputContainer,
  InputTextArea,
  SaveBtnContainer,
  TitleBoxDiv,
} from "@/component/register/register.style";
import RightIc from "@/img/ic_arrow_right.svg";
import LeftIc from "@/img/ic_arrow_left.svg";
import { useContext } from "react";
import RegisterComponentContext from "@/context/RegisterComponentContext";

const RegisterAdditionalInfo = () => {
  const { handleBackClick, register } = useContext<any>(
    RegisterComponentContext
  );

  return (
    <>
      <GoPageBtn onClick={() => handleBackClick("RegisterTags")}>
        <LeftIc />
      </GoPageBtn>
      <FormContainerDiv>
        <TitleBoxDiv>
          <span>멘티님을 소개해주세요</span>
          <div className="afterWrite">다음에 작성하기</div>
        </TitleBoxDiv>
        <InputContainer>
          <div className="titleBox">경력</div>
          <InputTextArea
            placeholder="예) 인턴, 연구실 등"
            {...register("career", { maxLength: 500 })}
          />
          <div className="titleBox">자격증</div>
          <InputTextArea
            placeholder="예) TOIEC, TOEFL, 기사 등"
            {...register("certificate", { maxLength: 500 })}
          />
          <div className="titleBox">수상내역</div>
          <InputTextArea
            placeholder="예) 공모전, 해커톤 등"
            {...register("awards", { maxLength: 500 })}
          />
          <div className="titleBox">대외활동</div>
          <InputTextArea
            placeholder="예) 소마, 서포터즈 등"
            {...register("activity", { maxLength: 500 })}
          />
        </InputContainer>
        <SaveBtnContainer>
          <button className="afterBtn">다음에 작성하기</button>
          <button type="submit" className="saveBtn">
            저장
          </button>
        </SaveBtnContainer>
      </FormContainerDiv>
      <GoPageBtn type="submit">
        <RightIc />
      </GoPageBtn>
    </>
  );
};

export default RegisterAdditionalInfo;
