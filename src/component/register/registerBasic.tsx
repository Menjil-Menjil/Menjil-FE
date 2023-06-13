import LeftIc from "@/img/ic_arrow_left.svg";
import RightIc from "@/img/ic_arrow_right.svg";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FormContainerDiv,
  GoPageBtn,
  InputContainer,
  TitleBoxDiv,
} from "@/component/register/register.style";
import styled from "@emotion/styled";
import RegisterComponentContext from "@/context/RegisterComponentContext";
import axios from "axios";

export const TestDiv = styled.div`
  width: 110px;
  height: 110px;
  margin-bottom: 25px;
  background-color: #d9d9d9;
`;

const RegisterBasic = () => {
  const { handleNextClick, register, errors, isValid, isDirty, trigger } =
    useContext<any>(RegisterComponentContext);

  const [duplicateName, setDuplicateName] = useState<string>("");

  const duplicateColor = () => {
    //input 박스 색상 변경
    if (errors.nickname !== undefined) return 1; //잘못된 닉네임
    if (duplicateName !== "") return 2; //중복확인 성공 시
    else return 3; //둘다 아닌 경우
  };

  const [nicknameCheck, setNameCheck] = useState<string>("");
  const nicknameChange = (e: any) => {
    trigger("nickname");
    setDuplicateName("");
    return setNameCheck(e.target.value);
  };

  const duplicateCheck = async () => {
    const res = await axios
      .get(
        `https://www.menjil-menjil.com/users/check-nickname?nickname=${nicknameCheck}`
      )
      .then((res) => {
        setDuplicateName(res.data.status);
        console.log(res.data.status);
      });
    return res;
  };

  return (
    <>
      <GoPageBtn disabled={true}>
        <LeftIc />
      </GoPageBtn>
      <FormContainerDiv>
        <TitleBoxDiv>
          <span>기본 정보를 입력해주세요</span>
        </TitleBoxDiv>
        <InputContainer>
          <div className="titleBox">닉네임</div>
          <input
            type="text"
            placeholder="특수문자 제외 10자 이하"
            className="inputBox"
            style={{ width: "367px", marginRight: "36px" }}
            aria-invalid={duplicateColor()}
            {...register("nickname", {
              required: true,
              minLength: {
                // value의 최대 길이
                value: 2,
                message: "최소 2글자로 입력해주세요.", // 에러 메세지
              },
              maxLength: {
                // value의 최대 길이
                value: 10,
                message: "10글자 이하로 입력해주세요.", // 에러 메세지
              },
              pattern: {
                // input의 정규식 패턴
                value: /^[A-za-z0-9가-힣]{2,10}$/,
                message: "올바르지 않은 형식입니다", // 에러 메세지
              },
              onChange: (e: any) => nicknameChange(e),
            })}
          />
        </InputContainer>
        <InputContainer>
          <div className="titleBox">생년월일</div>
          <input
            list="fruitslist"
            type="number"
            placeholder="년(4자리)"
            className="inputBox"
            min="1900"
            max="2900"
            style={{ width: "144px", marginRight: "20px" }}
            {...register("birthYear", {
              required: true,
            })}
          />
          <datalist id="fruitslist">
            <option value="1900" />
            <option value="2000" />
            <option value="2100" />
            <option value="2200" />
          </datalist>
          <input
            type="number"
            placeholder="월"
            className="inputBox"
            min="1"
            max="12"
            style={{ width: "100px" }}
            {...register("birthMonth", {
              required: true,
            })}
          />
        </InputContainer>
        <InputContainer>
          <button
            type="button"
            className="nicknameCheckBtn"
            disabled={nicknameCheck === "" ? true : !!errors.nickname}
            onClick={duplicateCheck}
          >
            중복확인
          </button>
        </InputContainer>
        <InputContainer>
          <div
            className="nicknameCheckTextDiv"
            style={
              duplicateName === "" ? { color: "#ef2626" } : { color: "#2c8f47" }
            }
          >
            {/* // validation fail 시 에러 메세지 표시 */}
            {duplicateName === ""
              ? errors?.nickname?.message
              : "사용 가능합니다."}
          </div>
        </InputContainer>
        <InputContainer>
          <div className="titleBox">가입유형</div>
          <input
            type="radio"
            id="choice_mentee"
            name="role"
            value="MENTEE"
            className="selectBox"
            {...register("role", {
              required: true,
            })}
          />
          <label
            htmlFor="choice_mentee"
            style={{ width: "321px", height: "214px", marginRight: "25px" }}
          >
            <TestDiv />
            멘티로 시작하기
          </label>
          <input
            type="radio"
            id="choice_mentor"
            name="role"
            value="MENTOR"
            className="selectBox"
            {...register("role", {
              required: true,
            })}
          />
          <label
            htmlFor="choice_mentor"
            style={{ width: "321px", height: "214px" }}
          >
            <TestDiv />
            멘토로 시작하기
          </label>
        </InputContainer>
      </FormContainerDiv>
      <GoPageBtn
        type="submit"
        disabled={!isValid || duplicateName === ""}
        onClick={() => handleNextClick("RegisterEducation")}
      >
        <RightIc />
      </GoPageBtn>
    </>
  );
};

export default RegisterBasic;
