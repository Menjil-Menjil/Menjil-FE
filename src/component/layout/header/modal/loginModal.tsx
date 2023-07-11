import Image from "next/image";
import closeIc from "@/img/ic_close.png";
import googleIc from "@/img/ic_google.png";
import kakaoIc from "@/img/ic_kakao.png";
import Link from "next/link";
import { ModalBox, ModalContent } from "./modal.style";
import {useRouter} from "next/router";
import {signIn} from "next-auth/react";

interface clickModalType {
  closeLoginModal: any;
  changeModal: any;
}
const LoginModal = ({ closeLoginModal, changeModal }: clickModalType) => {
  const router = useRouter();
  //const callBackURL = "https://www.menjil-menjil.com/";
  const callBackURL = "http://localhost:3000/" // 로컬 디버그용

  const socialLogin = async (e: any, provider: string) => {
    e.preventDefault();
    const res: any = await signIn(provider, {
      redirect: false,
      callbackUrl: callBackURL // 이유는 모르겠지만 둘다 있어야함(local 디버깅시)
    });
    if (res?.error) {
      console.log(res.error.status);
    } else {
      await router.push(callBackURL); // 이유는 모르겠지만 둘다 있어야함(local 디버깅시)
    }
  }

  return (
    <ModalBox>
      {/* // 모달을 닫는 state함수가 아래로 전파되는 것을 막아줌 */}
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <button className="closeBtn" onClick={closeLoginModal}>
          <Image src={closeIc} alt="닫기" />
        </button>
        <div className="loginLayout">
          <div className="contentBox">
            <div className="copy">
              나를 너무 잘 아는
              <br />
              멘토를 만나는 곳
            </div>
            <button className="google" onClick={e => socialLogin(e, "google")}>
              <Image
                src={googleIc}
                className="googleImage"
                alt="구글"
                width={18}
                height={18}
              />
              <div className="googleText">구글 로그인</div>
            </button>
            <button className="kakao" onClick={e => socialLogin(e, "kakao")}>
              <Image
                src={kakaoIc}
                className="kakaoImage"
                alt="카카오"
                width={18}
                height={18}
              />
              <div className="kakaoText">카카오 로그인</div>
            </button>
            <div className="loginState">
              <input type="checkbox" id="keepLoggedIn" name="keepLoggedIn" />
              <label htmlFor="keepLoggedIn">로그인 상태 유지</label>
            </div>
            <div className="register" onClick={changeModal}>
              <Link href="">아직 회원이 아니신가요?</Link>
            </div>
          </div>
        </div>
      </ModalContent>
    </ModalBox>
  );
};

export default LoginModal;
