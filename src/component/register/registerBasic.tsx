import Image from "next/image";
import styled from "@emotion/styled";
import leftIc from "@/img/ic_arrow_left.png"
import rightIc from "@/img/ic_arrow_right.png"
import {useDispatch} from "react-redux";
import {useState} from "react";
import {setRegister, setUser} from "@/redux/registerSlice";
import {FormContainerDiv, InputContainer, TitleBoxDiv} from "@/component/register/register.style";

interface propsType {
  dispatch: any;
}

const RegisterBasic = ({dispatch}: propsType) => {
  const [birth, setBirth] = useState({
    year: "",
    month: "",
  })

  const handleChange = ({e}: any) => {
    const { name, value } = e.target
    setBirth({ ...birth, [name]: value })
  }

  const handleNextClick = ({e}: any) => {
    //e.preventDefault()
    dispatch(setUser({ key: "birth", value: birth }))
    dispatch(setRegister("RegisterEducation"))
  }

  return (
    <>
      <Image src={leftIc} alt="이전" width={30} height={55} style={{marginTop: "279px"}}/>
      <FormContainerDiv>
        <TitleBoxDiv><span>기본 정보를 입력해주세요</span></TitleBoxDiv>
        <InputContainer>
          <div className="titleBox">생년월일</div>
          <input type="number" placeholder="년(4자리)" className="inputBox" style={{width: "144px", marginRight: "20px"}}/>
          <input type="number" placeholder="월" className="inputBox" style={{width: "100px"}}/>

          <div className="titleBox">가입유형</div>
          <input type="radio" id="choice_menti" name="role" value="menti" className="selectBox"/>
          <label htmlFor="choice_menti" style={{marginRight: "20px"}}>멘티로 시작하기</label>
          <input type="radio" id="choice_mentor" name="role" value="mentor" className="selectBox"/>
          <label htmlFor="choice_mentor">멘토로 시작하기</label>

        </InputContainer>
      </FormContainerDiv>
      <Image src={rightIc} alt="다음" width={30} height={55} onClick={handleNextClick} style={{marginTop: "279px"}}/>
    </>

  );
};

export default RegisterBasic;