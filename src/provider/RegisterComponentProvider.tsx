import React, { useState } from "react";
import RegisterComponentContext from "@/context/RegisterComponentContext";
import { useForm } from "react-hook-form";
import {useSession} from "next-auth/react";
import axios from "axios";

interface UserFormInterface {
  // sns 계정 정보
  email: string; // 소셜로그인 계정 이메일
  provider: string; // 소셜로그인 계정 sns 이름
  // 첫번째 폼
  nickname: string; // 닉네임
  role: string; // “MENTOR” 혹은 “MENTEE”
  birthYear: any; // YYYY, int
  birthMonth: any; // MM, int
  // 두번째 폼
  school: string; // 교육기관
  score: any; // 학점
  scoreRange: string; // "초반", "중반", "후반"
  graduateDate: any; // 졸업년도. YYYY. Date가 아닌 int로 처리
  graduateMonth: any;
  major: string; // 본전공
  minorList: [string]; // 추가 전공 리스트
  majorType: any; // 드롭박스 체크: "복수전공" or "부전공"
  // 세번째 폼
  fieldList: [string]; // 관심 분야 리스트
  techStackList: [string]; // 기술 스택 리스트
  // 네번째
  career: any; // 값이 없으면 null
  certificate: any; // 값이 없으면 null
  awards: any; // 값이 없으면 null
  activity: any; // 값이 없으면 null
}

interface UserRegisterApiInterface {
  userId: string; //provider + ‘_’ + random int 값(예시: google_303213124)
  email: string; //sns 계정 이메일 주소
  provider: string; //sns 이름 정보("google", "kakao")
  nickname: string; //고유 닉네임
  role: string; //멘토 또는 멘티("MENTOR", "MENTEE")
  birthYear: number; //생년
  birthMonth: number; //생월
  school: string; //교육기관
  score: number; //학점
  scoreRange: string; //학점 구간("초반", "중반", "후반")
  graduateDate: number; //졸업년도
  graduateMonth: number; //졸업월
  major: string; //본전공
  subMajor: any; //복수전공, null
  minor: any; //부전공, null
  field: string; //관심 분야. 여러 개면 ‘,’ 로 구분
  techStack: string; //기술 스택. 여러 개면 ‘,’ 로 구분
  career: any; //경력, null
  certificate: any; //자격증, null
  awards: any; //수상내역, null
  activity: any; //대외활동, null
}

const RegisterComponentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [component, setComponent] = useState("RegisterBasic");
  const [nicknameCheck, setNameCheck] = useState<string>("");
  const [submitData, setSubmitData] = useState<UserRegisterApiInterface>();
  const { data: sessionData, status: sessionStatus } = useSession();
  const {
    register,
    formState: { errors, isValid, isDirty },
    handleSubmit,
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

  const sendData = async (data: UserRegisterApiInterface) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup/`;
    try {
      const response = await fetch(url, {
        method: "POST", // 또는 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("성공:", result);
    } catch (error) {
      console.error("실패:", error);
    }
  }

  const onSubmit = (data: UserFormInterface) => {
    /* input 값 성형 */

    if (!!sessionData) {
      setSubmitData({
        userId: sessionData.provider + "_" + Math.floor(Math.random() * 10000000000),
        email: sessionData.user!.email!,
        provider: sessionData.provider,
        nickname: data.nickname,
        role: data.role,
        birthYear: parseInt(data.birthYear),
        birthMonth: parseInt(data.birthMonth),
        school: data.school,
        score: parseInt(data.score),
        scoreRange: data.scoreRange,
        graduateDate: parseInt(data.graduateDate),
        graduateMonth: parseInt(data.graduateMonth),
        major: data.major,
        subMajor: !!(data.minorList) ? data.minorList : null,
        minor: !!(data.minorList) ? data.minorList : null,
        field: data.fieldList.join(','),
        techStack: data.techStackList.join(','),
        career: !!(data.career) ? data.career : null,
        certificate: !!(data.certificate) ? data.certificate : null,
        awards: !!(data.awards) ? data.awards : null,
        activity: !!(data.activity) ? data.activity : null,
      });
      console.log(JSON.stringify(submitData));
      sendData(submitData!);
    }
    else return;
  };

  const handleNextClick = async (component: string) => {
    //await new Promise((r) => setTimeout(r, 500)); // delay for isSubmitting
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
        nicknameCheck,
        setNameCheck,
      }}
    >
      {children}
    </RegisterComponentContext.Provider>
  );
};

export default RegisterComponentProvider;
