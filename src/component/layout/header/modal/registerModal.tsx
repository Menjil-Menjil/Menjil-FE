import Image from "next/image";
import closeIc from "@/img/ic_close.png";
import googleIc from "@/img/ic_google.png";
import kakaoIc from "@/img/ic_kakao.png";
import Link from "next/link";
import { ModalBox, ModalContent } from "./modal.style";
import {signIn, useSession} from "next-auth/react";
import {useRouter} from "next/router";

interface clickModalType {
  closeRegisterModal: any;
  changeModal: any;
}

const RegisterModal = ({ closeRegisterModal, changeModal }: clickModalType) => {
  const {status: sessionStatus} = useSession();
  const router = useRouter();
  const callBackURL = "/register";
  //const callBackURL = "http://localhost:3000/register" // 로컬 디버그용

  const socialLogin = async (e: any, provider: string) => {
    e.preventDefault();
    const res: any = await signIn(provider, {
      redirect: true,
      //callbackUrl: callBackURL, // 이유는 모르겠지만 둘다 있어야함(local 디버깅시)
      loginMode: "register"
    });
    if (res?.error) {

    } else {
      if (sessionStatus === "authenticated") {
        await router.push(callBackURL); // 이유는 모르겠지만 둘다 있어야함(local 디버깅시)
      }
    }
  }

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
            <button className="google" onClick={e => socialLogin(e, "google")}>
              <Image
                src={googleIc}
                className="googleImage"
                alt="구글"
                width={18}
                height={18}
              />
              <div className="googleText">구글로 시작하기</div>
            </button>
            <button className="kakao" onClick={e => socialLogin(e, "kakao")}>
              <Image
                src={kakaoIc}
                className="kakaoImage"
                alt="카카오"
                width={18}
                height={18}
              />
              <div className="kakaoText">카카오로 시작하기</div>
            </button>
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
