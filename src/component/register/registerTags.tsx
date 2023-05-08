import {setRegister, setUser} from "@/redux/registerSlice";
import Image from "next/image";
import leftIc from "@/img/ic_arrow_left.png";
import rightIc from "@/img/ic_arrow_right.png";
import searchIc from "@/img/ic_search.png"
import styled from "@emotion/styled";
import {FormContainerDiv, InputContainer, TitleBoxDiv} from "@/component/register/register.style";

interface propsType {
  dispatch: any;
}

const RegisterTags = ({dispatch}: propsType) => {
  const handleBackClick = ({e}: any) => {
    dispatch(setRegister("RegisterEducation"))
  }
  const handleNextClick = ({e}: any) => {
    //e.preventDefault()
    dispatch(setRegister("RegisterAdditionalInfo"))
  }

  return (
    <>
      <Image src={leftIc} alt="이전" width={30} height={55} onClick={handleBackClick} style={{marginTop: "279px"}}/>
      <FormContainerDiv>
        <TitleBoxDiv><span>관심 분야를 알려주세요</span></TitleBoxDiv>
        <InputContainer>
          <div className="titleBox" >관심분야</div>
          <input type="checkbox" id="choice_fe" name="interests" value="fe" className="checkBox"/>
          <label htmlFor="choice_fe" style={{width: "140px", marginRight: "24px"}}>프론트엔드</label>
          <input type="checkbox" id="choice_be" name="interests" value="be" className="checkBox"/>
          <label htmlFor="choice_be" style={{width: "140px", marginRight: "24px"}}>백엔드</label>
          <input type="checkbox" id="choice_devops" name="interests" value="devops" className="checkBox"/>
          <label htmlFor="choice_devops" style={{width: "140px", marginRight: "24px"}}>DevOps</label>
          <input type="checkbox" id="choice_ai" name="interests" value="ai" className="checkBox"/>
          <label htmlFor="choice_ai" style={{width: "140px"}}>AI</label>
          <input type="checkbox" id="choice_game" name="interests" value="game" className="checkBox"/>
          <label htmlFor="choice_game" style={{width: "140px", marginRight: "24px"}}>게임</label>
          <input type="checkbox" id="choice_etc" name="interests" value="etc" className="checkBox"/>
          <label htmlFor="choice_etc" style={{width: "140px"}}>기타</label>
          {/* 관심분야 style_2
          <div className="radioContainer" style={{width: "148px", marginRight: "24px"}}>
            <input type="checkbox" id="choice_fe" name="interests" value="fe" className="radioBox"/>
            <label htmlFor="choice_fe" style={{width: "140px"}}>프론트엔드</label>
          </div>
          <div className="radioContainer" style={{width: "148px", marginRight: "24px"}}>
            <input type="checkbox" id="choice_be" name="interests" value="be" className="radioBox"/>
            <label htmlFor="choice_be" style={{width: "140px"}}>백엔드</label>
          </div>
          <div className="radioContainer" style={{width: "148px", marginRight: "24px"}}>
            <input type="checkbox" id="choice_devops" name="interests" value="devops" className="radioBox"/>
            <label htmlFor="choice_devops" style={{width: "140px"}}>DevOps</label>
          </div>
          <div className="radioContainer" style={{width: "148px"}}>
            <input type="checkbox" id="choice_ai" name="interests" value="ai" className="radioBox"/>
            <label htmlFor="choice_ai" style={{width: "140px"}}>AI</label>
          </div>
          <div className="radioContainer" style={{width: "148px", marginRight: "24px"}}>
            <input type="checkbox" id="choice_game" name="interests" value="game" className="radioBox"/>
            <label htmlFor="choice_game" style={{width: "140px"}}>게임</label>
          </div>
          <div className="radioContainer" style={{width: "148px"}}>
            <input type="checkbox" id="choice_etc" name="interests" value="etc" className="radioBox"/>
            <label htmlFor="choice_etc" style={{width: "140px"}}>기타</label>
          </div>
          */}
        </InputContainer>
        <InputContainer>
          <div className="titleBox" >기술스택</div>
          <div className="subtitleBox">인기/추천 기술스택</div>
          <input type="checkbox" id="choice_react" name="tech_stack" value="react" className="checkBox"/>
          <label htmlFor="choice_react" style={{width: "140px", marginRight: "24px"}}>React</label>
          <input type="checkbox" id="choice_flutter" name="tech_stack" value="flutter" className="checkBox"/>
          <label htmlFor="choice_flutter" style={{width: "140px", marginRight: "24px"}}>Flutter</label>
          <input type="checkbox" id="choice_kotlin" name="tech_stack" value="kotlin" className="checkBox"/>
          <label htmlFor="choice_kotlin" style={{width: "140px", marginRight: "24px"}}>Kotlin</label>
          <input type="checkbox" id="choice_swift" name="tech_stack" value="swift" className="checkBox"/>
          <label htmlFor="choice_swift" style={{width: "140px"}}>Swift</label>
          <input type="checkbox" id="choice_spring" name="tech_stack" value="spring" className="checkBox"/>
          <label htmlFor="choice_spring" style={{width: "140px", marginRight: "24px"}}>Spring</label>
          <input type="checkbox" id="choice_nodejs" name="tech_stack" value="nodejs" className="checkBox"/>
          <label htmlFor="choice_nodejs" style={{width: "140px", marginRight: "24px"}}>Node.js</label>
          <input type="checkbox" id="choice_unreal" name="tech_stack" value="unreal" className="checkBox"/>
          <label htmlFor="choice_unreal" style={{width: "140px", marginRight: "24px"}}>Unreal</label>
          <input type="checkbox" id="choice_tensorflow" name="tech_stack" value="tensorflow" className="checkBox"/>
          <label htmlFor="choice_tensorflow" style={{width: "140px"}}>Tensorflow</label>
          <input type="checkbox" id="choice_docker" name="tech_stack" value="docker" className="checkBox"/>
          <label htmlFor="choice_docker" style={{width: "140px", marginRight: "24px"}}>Docker</label>
          <input type="checkbox" id="choice_aws" name="tech_stack" value="aws" className="checkBox"/>
          <label htmlFor="choice_aws" style={{width: "140px", marginBottom: "15px"}}>AWS</label>
          <div className="subtitleBox">내가 찾는 기술스택이 없다면?</div>
          <div className="searchContainer">
            <input type="search" placeholder="검색해서 추가하기" className="searchBox" style={{width: "324px"}}/>
            <Image src={searchIc} alt="찾기" className="icon" width={24} height={24}/>
          </div>
        </InputContainer>
      </FormContainerDiv>
      <Image src={rightIc} alt="다음" width={30} height={55} onClick={handleNextClick} style={{marginTop: "279px"}}/>
    </>
  );
};

export default RegisterTags;