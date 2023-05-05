import styled from '@emotion/styled'

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
`

// 여기에 만들고 싶은 모달 스타일 구현
export const LoginModalContent = styled.div`
  width: 530px;
  min-height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  .copy{
    margin: 71px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
  }
  > button{
    width: 300px;
    height: 45px;
    margin-bottom: 20px;
    border-radius: 5px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
  }
  .google{
    margin-top: 7px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.15);
    color: rgba(0, 0, 0, 0.54);
  }
  .kakao{
    background: #FEE500;
    border: 1px solid #FEE500;
    color: rgba(0, 0, 0, 0.85);
  }
  .loginState{
    width: 300px;
    margin-top: 11px;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #515151;
  }
  .register{
    margin-top: 132px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    > a{
      color: var(--theme-color);
    }
  }
`

interface clickModalType{
  clickModal: any;
}
const LoginModal = ({clickModal}: clickModalType) => {

  return(
    // 뒷배경을 클릭하면 모달을 나갈 수 있게 해야하므로 뒷 배경 onClick에 state함수를 넣는다.
    <LoginModalBox onClick={clickModal}>
      {/* // 모달을 닫는 state함수가 아래로 전파되는 것을 막아줌 */}
      <LoginModalContent onClick={(e) => e.stopPropagation()}>
        <div className="copy">나를 너무 잘 아는<br/>멘토를 만나는 곳</div>
        <button className="google">구글 로그인</button>
        <button className="kakao">카카오 로그인</button>
        <div className="loginState">
          <input type="checkbox" id="keepLoggedIn" name="keepLoggedIn"/>
          <label htmlFor="keepLoggedIn">로그인 상태 유지</label>
        </div>
        <div className="register">
          <a href="/register">아직 회원이 아니신가요?</a>
        </div>
      </LoginModalContent>
    </LoginModalBox>
  )
}

export default LoginModal