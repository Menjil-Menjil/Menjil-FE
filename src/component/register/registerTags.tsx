import Image from "next/image";
import searchIc from "@/img/ic_search.png";
import styled from "@emotion/styled";
import {
  FormContainerDiv,
  GoPageBtn,
  InputContainer,
  TitleBoxDiv,
} from "@/component/register/register.style";
import RightIc from "@/img/ic_arrow_right.svg";
import LeftIc from "@/img/ic_arrow_left.svg";
import { Fragment, useContext } from "react";
import RegisterComponentContext from "@/context/RegisterComponentContext";

export const ExplanationP = styled.div`
  /* position: absolute; */
  //transform: translateX(103px);
  display: inline-flex;
  margin-left: 20px;
  top: 457px;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #6b6767;
`;

const fieldValList = [
  { value: "프론트엔드", text: "프론트엔드" },
  { value: "백엔드", text: "백엔드" },
  { value: "DevOps", text: "DevOps" },
  { value: "AI", text: "AI" },
  { value: "게임", text: "게임" },
  { value: "기타", text: "기타" },
];

const techStackValList = [
  { value: "React", text: "React" },
  { value: "Flutter", text: "Flutter" },
  { value: "Kotlin", text: "Kotlin" },
  { value: "Swift", text: "Swift" },
  { value: "Node.js", text: "Node.js" },
  { value: "Spring", text: "Spring" },
  { value: "Unreal", text: "Unreal" },
  { value: "Tensorflow", text: "Tensorflow" },
  { value: "Docker", text: "Docker" },
  { value: "AWS", text: "AWS" },
];

const RegisterTags = () => {
  const { handleNextClick, handleBackClick, register, isValid } =
    useContext<any>(RegisterComponentContext);

  return (
    <>
      <GoPageBtn onClick={() => handleBackClick("RegisterEducation")}>
        <LeftIc />
      </GoPageBtn>
      <FormContainerDiv>
        <TitleBoxDiv>
          <span>관심 분야를 알려주세요</span>
        </TitleBoxDiv>
        <InputContainer>
          <div className="titleBox">
            관심분야
            <ExplanationP>중복으로 선택할 수 있어요</ExplanationP>
          </div>

          {fieldValList.map((item: any, index: any) => (
            <Fragment key={index}>
              <input
                type="checkbox"
                id={"fields" + index}
                name="fields"
                value={item.value}
                className="selectBox"
                {...register("fieldList", { required: true })}
              />
              <label
                htmlFor={"fields" + index}
                style={
                  // 4열만 오른쪽 여백 없음
                  (index + 1) % 4 == 0 ? {} : { marginRight: "25px" }
                }
              >
                {item.text}
              </label>
            </Fragment>
          ))}
        </InputContainer>
        <InputContainer>
          <div className="titleBox">기술스택</div>
          <div className="subtitleBox">인기/추천 기술스택</div>
          {techStackValList.map((item: any, index: any) => (
            <Fragment key={index}>
              <input
                type="checkbox"
                id={"techStack" + index}
                name="techStack"
                value={item.value}
                className="selectBox"
                {...register("techStackList", { required: true })}
              />
              <label
                htmlFor={"techStack" + index}
                style={
                  // 4열만 오른쪽 여백 없음
                  (index + 1) % 4 == 0 ? {} : { marginRight: "25px" }
                }
              >
                {item.text}
              </label>
            </Fragment>
          ))}
          <div className="subtitleBox" style={{ marginTop: "30px" }}>
            내가 찾는 기술스택이 없다면?
          </div>
          <div className="searchContainer">
            <input
              type="search"
              placeholder="검색해서 추가하기"
              className="searchBox"
              style={{ width: "324px" }}
            />
            <input id="submit" type="submit" />
            <label id="submit">
              <Image src={searchIc} alt="찾기" className="icon" />
            </label>
          </div>
        </InputContainer>
      </FormContainerDiv>
      <GoPageBtn
        // type="submit"
        disabled={!isValid}
        onClick={() => {
          handleNextClick("RegisterAdditionalInfo");
        }}
      >
        <RightIc />
      </GoPageBtn>
    </>
  );
};

export default RegisterTags;
