import styled from "@emotion/styled";
import Image from "next/image";
import closeIc from "@/img/ic_close.png";
import googleIc from "@/img/ic_google.png";
import kakaoIc from "@/img/ic_kakao.png";

// 모달 창 뒷배경
export const LoginModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 여기에 만들고 싶은 모달 스타일 구현
export const LoginModalContent = styled.div`
  width: 530px;
  height: 650px;
  user-select: none;
  background-color: #ffffff;
  display: inline-flex;
  justify-content: center;
  position: relative;
  .closeBtn {
    position: absolute;
    top: 29px;
    right: 29px;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  .loginLayout {
    width: 300px;
    height: 100%;
    position: relative;
    .contentBox {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .copy {
        margin: 128px 0 78px;
        font-family: "Pretendard";
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        text-align: center;
      }
      > a {
        text-decoration: none;
        width: 100%;
        min-height: 45px;
        margin-bottom: 20px;
        border-radius: 5px;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        display: flex;
        /* gap: 90px; */
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
      }
      .googleImage {
        margin-left: 14px;
      }
      .google {
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.15);
        color: rgba(0, 0, 0, 0.54);
      }
      .googleText {
        margin-right: 104px;
      }
      .kakaoImage {
        margin-left: 14px;
      }
      .kakao {
        background: #fee500;
        border: 1px solid #fee500;
        color: rgba(0, 0, 0, 0.85);
      }
      .kakaoText {
        margin-right: 95px;
      }
      .loginState {
        width: 300px;
        margin-top: 11px;
        font-family: "Pretendard";
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: #515151;
        > * {
          cursor: pointer;
        }
      }
      .register {
        margin-top: 132px;
        font-family: "Pretendard";
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        > a {
          color: var(--highlighted-element);
        }
      }
    }
  }
`;

interface clickModalType {
  closeModal: any;
}
const LoginModal = ({ closeModal }: clickModalType) => {
  console.log(process.env.NEXT_PUBLIC_API_URL + "/auth/google");
  return (
    <LoginModalBox>
      {/* // 모달을 닫는 state함수가 아래로 전파되는 것을 막아줌 */}
      <LoginModalContent onClick={(e) => e.stopPropagation()}>
        <button className="closeBtn" onClick={closeModal}>
          <Image src={closeIc} alt="닫기" />
        </button>
        <div className="loginLayout">
          <div className="contentBox">
            <div className="copy">
              나를 너무 잘 아는
              <br />
              멘토를 만나는 곳
            </div>
            <a
              className="google"
              href={process.env.NEXT_PUBLIC_API_URL + "/auth/google"}
            >
              <Image
                src={googleIc}
                className="googleImage"
                alt="구글"
                width={18}
                height={18}
              />
              <div
                className="googleText"
                onClick={() =>
                  console.log(process.env.NEXT_PUBLIC_API_URL + "/auth/google")
                }
              >
                구글 로그인
              </div>
            </a>
            <a
              className="kakao"
              href={process.env.NEXT_PUBLIC_API_URL + "/auth/kakao"}
            >
              <Image
                src={kakaoIc}
                className="kakaoImage"
                alt="카카오"
                width={18}
                height={18}
              />
              <div className="kakaoText">카카오 로그인</div>
            </a>
            <div className="loginState">
              <input type="checkbox" id="keepLoggedIn" name="keepLoggedIn" />
              <label htmlFor="keepLoggedIn">로그인 상태 유지</label>
            </div>
            <div className="register">
              <a href="/register">아직 회원이 아니신가요?</a>
            </div>
          </div>
        </div>
      </LoginModalContent>
    </LoginModalBox>
  );
};

export default LoginModal;
