import React, { useState } from "react";
import RegisterComponentContext from "@/context/RegisterComponentContext";
import { useForm } from "react-hook-form";
import { type } from "os";

interface UserFormInterface {
  // 유저 정보 객체
  data: string; // 소셜 로그인 결과로 반환받은 JWT data
  nickname: string; // 닉네임
  role: string; // “MENTOR” 혹은 “MENTEE”
  birthYear: any; // YYYY, int
  birthMonth: any; // MM, int
  // birth: number
  school: string; // 교육기관
  score: any; // 학점
  scoreRange: string; // "초반", "중반", "후반"
  graduateDate: any; // 졸업년도. YYYY. Date가 아닌 int로 처리
  major: string; // 본전공
  // subMajor: string // 복수전공, 값이 없으면 null
  // minor: string // 부전공, 값이 없으면 null
  majorType: any; // 드롭박스 체크: "복수전공" or "부전공"
  fieldList: [string]; // 관심 분야 리스트
  // field: string // 관심 분야. 여러 개면 ‘,’ 로 구분
  techStackList: [string]; // 기술 스택 리스트
  // techStack: string // 기술 스택. 여러 개면 ‘,’ 로 구분
  career: any; // 값이 없으면 null
  certificate: any; // 값이 없으면 null
  awards: any; // 값이 없으면 null
  activity: any; // 값이 없으면 null
}

const RegisterComponentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // const [user, setUser] = useState<UserFormInterface>();
  const [component, setComponent] = useState("RegisterBasic");

  const {
    register,
    formState: { errors, isSubmitting, isValid, isDirty },
    handleSubmit,
    setError,
    watch,
    setValue,
    getValues,
    trigger,
  } = useForm<UserFormInterface>({
    mode: "onBlur",
    defaultValues: {
      // 초기값
      majorType: "",
      score: "",
    },
  });

  const onSubmit = (data: UserFormInterface) => {
    /* input 값 변형 코드 */
    data.birthYear = parseInt(data.birthYear);
    data.birthMonth = parseInt(data.birthMonth);
    // data.role = "MENTEE"
    data.graduateDate = parseInt(data.graduateDate);
    data.score = parseInt(data.score);
    if (data.career == undefined || data.career == "") data.career = null;
    if (data.certificate == undefined || data.certificate == "")
      data.certificate = null;
    if (data.awards == undefined || data.awards == "") data.awards = null;
    if (data.activity == undefined || data.activity == "") data.activity = null;

    console.log("성공!");
    console.log(JSON.stringify(data));
    console.log(typeof data.birthYear);
  };

  const handleNextClick = async (component: string) => {
    await new Promise((r) => setTimeout(r, 500)); // delay for isSubmitting
    setComponent(component);
  };

  const handleBackClick = (component: string) => {
    setComponent(component);
  };

  return (
    <RegisterComponentContext.Provider
      value={{
        component, // 회원가입 단계 컴포넌트 이름
        handleNextClick, // 버튼 "다음" 클릭
        handleBackClick, // 버튼 "이전" 클릭
        register,
        errors, // input value 에러 출력
        isValid, // form data 유효한 입력 완료시, true
        isDirty, // input value 유효성 검사
        handleSubmit,
        watch, // 단일 input value 리턴
        setValue,
        getValues,
        trigger,
        onValid: onSubmit,
      }}
    >
      {children}
    </RegisterComponentContext.Provider>
  );
};

export default RegisterComponentProvider;
