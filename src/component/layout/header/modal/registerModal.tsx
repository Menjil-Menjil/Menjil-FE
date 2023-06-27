import Image from "next/image";
import closeIc from "@/img/ic_close.png";
import googleIc from "@/img/ic_google.png";
import kakaoIc from "@/img/ic_kakao.png";
import Link from "next/link";
import { ModalBox, ModalContent } from "./modal.style";
import {getCsrfToken, signIn, useSession} from "next-auth/react";
import axios from "axios";

interface clickModalType {
  closeRegisterModal: any;
  changeModal: any;
}

const RegisterModal = ({ closeRegisterModal, changeModal }: clickModalType) => {
  const { data: session } = useSession();
  const getSocialLoginToken = async () => {
    const csrfToken = await getCsrfToken();
    console.log(csrfToken);
  }

  const onClickKakao = async () => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signin/:kakao`);
    } catch (e: any) {
    }
  };

  return (
    <ModalBox>
      {/* // 모달을 닫는 state함수가 아래로 전파되는 것을 막아줌 */}
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <button className="closeBtn" onClick={closeRegisterModal}>
          <Image src={closeIc} alt="닫기" />
        </button>
        <div className="loginLayout">
          <div className="contentBox">
            <div className="copy">
              똑똑한 멘토링 채팅
              <br />
              멘질멘질 가입을 환영합니다.
            </div>
            <button className="google" onClick={() => signIn("google")}>
              <Image
                src={googleIc}
                className="googleImage"
                alt="구글"
                width={18}
                height={18}
              />
              <div className="googleText">구글로 시작하기</div>
            </button>
            {/*<Link*/}
            {/*  className="google"*/}
            {/*  href={process.env.NEXT_PUBLIC_API_URL + "/auth/google"}*/}
            {/*>*/}
            {/*  <Image*/}
            {/*    src={googleIc}*/}
            {/*    className="googleImage"*/}
            {/*    alt="구글"*/}
            {/*    width={18}*/}
            {/*    height={18}*/}
            {/*  />*/}
            {/*  <div className="googleText">구글로 시작하기</div>*/}
            {/*</Link>*/}
            {/*<Link*/}
            {/*  className="kakao"*/}
            {/*  href={process.env.NEXT_PUBLIC_API_URL + "/auth/kakao"}*/}
            <button className="kakao" onClick={() => signIn("kakao")}>
              <Image
                src={kakaoIc}
                className="kakaoImage"
                alt="카카오"
                width={18}
                height={18}
              />
              <div className="kakaoText">카카오로 시작하기</div>
            </button>
            <button onClick={onClickKakao}>click</button>
            {/*</Link>*/}
            <div className="register" onClick={changeModal}>
              <Link href="">이미 회원이신가요?</Link>
            </div>
          </div>
        </div>
      </ModalContent>
    </ModalBox>
  );
};

export default RegisterModal;
