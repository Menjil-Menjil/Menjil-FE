import styled from "@emotion/styled";

// 모달 창 뒷배경
export const ModalBox = styled.div`
  z-index: 2;
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
export const ModalContent = styled.div`
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
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      .copy {
        margin: 128px 0 78px;
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        text-align: center;
      }
      > button {
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
        position: relative;
        /* gap: 90px; */
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      .googleImage {
        position: absolute;
        left: 14px;
      }
      .google {
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.15);
        color: rgba(0, 0, 0, 0.54);
      }
      .googleText {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
      }
      .kakaoImage {
        position: absolute;
        left: 14px;
      }
      .kakao {
        background: #fee500;
        border: 1px solid #fee500;
        color: rgba(0, 0, 0, 0.85);
      }
      .kakaoText {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
      }
      .loginState {
        width: 300px;
        margin-top: 11px;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: #515151;
        > * {
          cursor: pointer;
        }
      }
      .register {
        position: absolute;
        bottom: 57px;
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
