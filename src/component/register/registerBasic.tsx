import LeftIc from "@/img/ic_arrow_left.svg"
import RightIc from "@/img/ic_arrow_right.svg"
import {useContext} from "react";
import {FormContainerDiv, GoPageBtn, InputContainer, TitleBoxDiv} from "@/component/register/register.style";
import styled from "@emotion/styled";
import RegisterComponentContext from "@/context/RegisterComponentContext";

export const TestDiv = styled.div`
  width: 110px;
  height: 110px;
  margin-bottom: 25px;
  background-color: #D9D9D9;
`;

const RegisterBasic = () => {
  const {handleNextClick} = useContext<any>(RegisterComponentContext);

  return (
    <>
      <GoPageBtn disabled={true}><LeftIc/></GoPageBtn>
      <FormContainerDiv>
        <TitleBoxDiv><span>기본 정보를 입력해주세요</span></TitleBoxDiv>
        <InputContainer>
          <div className="titleBox">닉네임</div>
          <input type="text"
                 placeholder="특수문자 제외 10자 이하"
                 className="inputBox"
                 style={{width: "367px", marginRight: "36px"}}/>
        </InputContainer>
        <InputContainer>
          <div className="titleBox">생년월일</div>
          <input type="number"
                 placeholder="년(4자리)"
                 className="inputBox"
                 style={{width: "144px", marginRight: "20px"}}/>
          <input type="number"
                 placeholder="월"
                 className="inputBox"
                 style={{width: "100px"}}/>
        </InputContainer>
        <InputContainer>
          <button type="button" className="nicknameCheckBtn">중복확인</button>
        </InputContainer>
        <InputContainer>
          <div className="nicknameCheckTextDiv">{"사용할 수 있는 닉네임입니다"}</div>
        </InputContainer>
        <InputContainer>
          <div className="titleBox">가입유형</div>
          <input type="radio" id="choice_menti" name="role" value="menti" className="selectBox"/>
          <label htmlFor="choice_menti" style={{width: "321px", height: "214px", marginRight: "25px"}}>
            <TestDiv/>
            멘티로 시작하기
          </label>
          <input type="radio" id="choice_mentor" name="role" value="mentor" className="selectBox"/>
          <label htmlFor="choice_mentor" style={{width: "321px", height: "214px"}}>
            <TestDiv/>
            멘토로 시작하기
          </label>
        </InputContainer>
      </FormContainerDiv>
      <GoPageBtn type="submit" onClick={() => handleNextClick("RegisterEducation")}><RightIc/></GoPageBtn>
    </>
  );
};

export default RegisterBasic;