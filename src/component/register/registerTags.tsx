import {setRegister, setUser} from "@/redux/registerSlice";
import Image from "next/image";
import leftIc from "@/img/ic_arrow_left.png";
import searchIc from "@/img/ic_search.png"
import styled from "@emotion/styled";
import {FormContainerDiv, GoPageBtn, InputContainer, TitleBoxDiv} from "@/component/register/register.style";
import RightIc from "@/img/ic_arrow_right.svg";
import LeftIc from "@/img/ic_arrow_left.svg";

export const ExplanationP = styled.p`
  position: absolute;
  transform: translateX(103px);
  top: 457px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #6B6767;
`;

const interestList = [
  {id: "choice_fe", value: "fe", text: "프론트엔드", style: {marginRight: "25px"}},
  {id: "choice_be", value: "be", text: "백엔드", style: {marginRight: "25px"}},
  {id: "choice_devops", value: "devops", text: "DevOps", style: {marginRight: "25px"}},
  {id: "choice_ai", value: "ai", text: "AI", style: {}},
  {id: "choice_game", value: "game", text: "게임", style: {marginRight: "25px"}},
  {id: "choice_etc", value: "etc", text: "기타", style: {marginRight: "25px"}}
];

const techStackList = [
  {id: "choice_react", value: "react", text: "React", style: {marginRight: "25px"}},
  {id: "choice_flutter", value: "flutter", text: "Flutter", style: {marginRight: "25px"}},
  {id: "choice_kotlin", value: "kotlin", text: "Kotlin", style: {marginRight: "25px"}},
  {id: "choice_swift", value: "swift", text: "Swift", style: {}},
  {id: "choice_nodejs", value: "nodejs", text: "Node.js", style: {marginRight: "25px"}},
  {id: "choice_spring", value: "spring", text: "Spring", style: {marginRight: "25px"}},
  {id: "choice_unreal", value: "unreal", text: "Unreal", style: {marginRight: "25px"}},
  {id: "choice_tensorflow", value: "tensorflow", text: "Tensorflow", style: {}},
  {id: "choice_docker", value: "docker", text: "Docker", style: {marginRight: "25px"}},
  {id: "choice_aws", value: "aws", text: "AWS", style: {marginRight: "25px"}},
];

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
      <GoPageBtn onClick={handleBackClick}><LeftIc/></GoPageBtn>
      <FormContainerDiv>
        <TitleBoxDiv><span>관심 분야를 알려주세요</span></TitleBoxDiv>
        <InputContainer>
          <div className="titleBox">관심분야</div>
          <ExplanationP>중복으로 선택할 수 있어요</ExplanationP>
          {interestList.map((item: any) => (
            <>
              <input type="checkbox" id={item.id} name="interests" value={item.value} className="selectBox"/>
              <label htmlFor={item.id} style={item.style}>{item.text}</label>
            </>
          ))}
        </InputContainer>
        <InputContainer>
          <div className="titleBox" >기술스택</div>
          <div className="subtitleBox">인기/추천 기술스택</div>
          {techStackList.map((item: any) => (
            <>
              <input type="checkbox" id={item.id} name="tech_stack" value={item.value} className="selectBox"/>
              <label htmlFor={item.id} style={item.style}>{item.text}</label>
            </>
          ))}
          <div className="subtitleBox" style={{marginTop: "30px"}}>내가 찾는 기술스택이 없다면?</div>
          <div className="searchContainer">
            <input type="search" placeholder="검색해서 추가하기" className="searchBox" style={{width: "324px"}}/>
            <input id="submit" type="submit"/>
            <label id="submit"><Image src={searchIc} alt="찾기" className="icon"/></label>
          </div>
        </InputContainer>
      </FormContainerDiv>
      <GoPageBtn onClick={handleNextClick}><RightIc/></GoPageBtn>
    </>
  );
};

export default RegisterTags;