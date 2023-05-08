import Image from "next/image";
import styled from "@emotion/styled";
import leftIc from "@/img/ic_arrow_left.png"
import rightIc from "@/img/ic_arrow_right.png"
import {setRegister, setUser} from "@/redux/registerSlice";
import {FormContainerDiv, InputContainer, TitleBoxDiv} from "@/component/register/register.style";

interface propsType {
  dispatch: any;
}

const RegisterEducation = ({dispatch}: propsType) => {
  const handleBackClick = ({e}: any) => {
    dispatch(setRegister("RegisterBasic"))
  }
  const handleNextClick = ({e}: any) => {
    dispatch(setRegister("RegisterTags"))
  }

  return (
    <>
      <Image src={leftIc} alt="이전" width={30} height={55} onClick={handleBackClick} style={{marginTop: "279px"}}/>
      <FormContainerDiv>
        <TitleBoxDiv><span>어디에서 공부하셨나요?</span></TitleBoxDiv>
        <InputContainer>
          <div className="titleBox" >교육기관</div>
          <input type="text" placeholder="예) 서울과학기술대학교" className="inputBox" style={{width: "363px", marginRight: "40px"}}/>
        </InputContainer>
        <InputContainer>
          <div className="titleBox" >졸업(예정)연도</div>
          <input type="number" placeholder="년(4자리)" className="inputBox" style={{width: "144px", marginRight: "20px"}}/>
        </InputContainer>
        <InputContainer>
          <div className="titleBox" >학과</div>
          <input type="text" placeholder="예) 컴퓨터공학과" className="inputBox" style={{width: "667px"}}/>
          <div className="titleBox" >학점</div>
          <input type="number" placeholder="점" className="inputBox" style={{width: "120px", marginRight: "20px"}}/>
          <div className="scoreRadioContainer">
            <input type="radio" id="choice_start" name="score" value="start" className="scoreRadioBox"/>
            <label htmlFor="choice_start">초반</label>
            <input type="radio" id="choice_middle" name="score" value="middle" className="scoreRadioBox"/>
            <label htmlFor="choice_middle">중반</label>
            <input type="radio" id="choice_end" name="score" value="end" className="scoreRadioBox"/>
            <label htmlFor="choice_end">후반</label>
          </div>
        </InputContainer>
      </FormContainerDiv>
      <Image src={rightIc} alt="다음" width={30} height={55} onClick={handleNextClick} style={{marginTop: "279px"}}/>
    </>
  );
};

export default RegisterEducation;