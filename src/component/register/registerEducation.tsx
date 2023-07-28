import {
  FormContainerDiv,
  GoPageBtn,
  InputContainer,
  TitleBoxDiv,
} from "@/component/register/register.style";
import DropDown from "@/component/register/dropDown";
import RightIc from "@/img/ic_arrow_right.svg";
import LeftIc from "@/img/ic_arrow_left.svg";
import { useContext } from "react";
import RegisterComponentContext from "@/context/RegisterComponentContext";

const RegisterEducation = () => {
  const {
    handleNextClick,
    handleBackClick,
    register,
    isValid,
    watch,
    majors,
    addMajor,
  } = useContext<any>(RegisterComponentContext);

  return (
    <>
      <GoPageBtn
        onClick={() => {
          handleBackClick("RegisterBasic");
        }}
      >
        <LeftIc />
      </GoPageBtn>
      <FormContainerDiv>
        <TitleBoxDiv>
          <span>어디에서 공부하셨나요?</span>
        </TitleBoxDiv>
        <InputContainer>
          <div className="titleBox">교육기관</div>
          <input
            type="text"
            placeholder="예) 서울과학기술대학교"
            className="inputBox"
            style={{ width: "363px", marginRight: "40px" }}
            {...register("school", {
              required: true,
              pattern: {
                // input의 정규식 패턴
                value: /^[가-힣]{1,20}$/,
                message: "올바르지 않은 형식입니다", // 에러 메세지
              },
            })}
          />
        </InputContainer>
        <InputContainer>
          <div className="titleBox">졸업(예정)연도</div>
          <input
            type="number"
            placeholder="년(4자리)"
            className="inputBox"
            min="1900"
            max="2900"
            style={{ width: "144px", marginRight: "20px" }}
            {...register("graduateDate", {
              required: true,
            })}
          />

          <input
            type="number"
            placeholder="월"
            className="inputBox"
            min="1"
            max="12"
            style={{ width: "100px" }}
            {...register("graduateMonth", {
              required: true,
            })}
          />
        </InputContainer>
        <InputContainer>
          <div className="titleBox">학과</div>
          <input
            type="text"
            placeholder="예) 컴퓨터공학과"
            className="inputBox"
            style={{ width: "667px" }}
            {...register("major", {
              required: true,
              pattern: {
                // input의 정규식 패턴
                value: /^[가-힣]{1,20}$/,
                message: "올바르지 않은 형식입니다", // 에러 메세지
              },
            })}
          />
          <div className="majors">
            {majors.map((num: any, index: any) => {
              return (
                <InputContainer key={index}>
                  <div className="addMajor">
                    <input
                      type="text"
                      placeholder="예) 컴퓨터공학과"
                      className="inputBox"
                      style={{
                        width: "458px",
                        display: "inline",
                        marginRight: "18px",
                      }}
                      {...register(`subMajor${index}`, {
                        pattern: {
                          // input의 정규식 패턴
                          value: /^[가-힣]{1,20}$/,
                          message: "올바르지 않은 형식입니다", // 에러 메세지
                        },
                      })}
                    />
                    <DropDown
                      id={`majorType${index}`}
                      valueList={["복수전공", "부전공"]}
                      placeHolder={"유형"}
                      widthVal="189px"
                    />
                  </div>
                </InputContainer>
              );
            })}
          </div>
          <button
            type="button"
            className="addBtn"
            style={{ width: "667px", marginTop: "20px" }}
            disabled={majors.length === 2}
            onClick={() => addMajor()}
          >
            전공 추가하기
          </button>
          <div className="titleBox">학점</div>
          <DropDown
            id={"score"}
            valueList={["1", "2", "3", "4"]}
            placeHolder={"점"}
            widthVal="120px"
          />
          <div className="scoreRadioContainer" style={{ marginLeft: "20px" }}>
            <input
              type="radio"
              id="choice_start"
              name="score"
              value="초반"
              className="scoreRadioBox"
              {...register("scoreRange", { required: true })}
            />
            <label htmlFor="choice_start">초반</label>
            <input
              type="radio"
              id="choice_middle"
              name="score"
              value="중반"
              className="scoreRadioBox"
              {...register("scoreRange", { required: true })}
            />
            <label htmlFor="choice_middle">중반</label>
            <input
              type="radio"
              id="choice_end"
              name="score"
              value="후반"
              className="scoreRadioBox"
              {...register("scoreRange", { required: true })}
            />
            <label htmlFor="choice_end">후반</label>
          </div>
        </InputContainer>
      </FormContainerDiv>
      <GoPageBtn
        // type="submit"
        // 학점("score")에 대한 값이 드롭박스 컴포넌트(div)로 설정되기 때문에 required 속성 대신 직접 값을 검사한다
        disabled={!isValid || !watch("score")}
        onClick={() => handleNextClick("RegisterTags")}
      >
        <RightIc />
      </GoPageBtn>
    </>
  );
};

export default RegisterEducation;
