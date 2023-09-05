import {useState} from "react";
import RegisterModal from "@/component/layout/header/modal/registerModal";
import LoginModal from "@/component/layout/header/modal/loginModal";
import {UnauthMenuContainerDiv} from "@/component/main/userAside/userAside.style";

const UnauthMenu = () => {
  // 모달 버튼 클릭 유무를 저장할 state
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  // 버튼 클릭시 모달 버튼 클릭 유무를 설정하는 state 함수
  const closeLoginModal = () => setShowLoginModal(!showLoginModal);
  const closeRegisterModal = () => setShowRegisterModal(!showRegisterModal);

  //모달 변경 함수
  const changeModal = () => {
    setShowRegisterModal(!showRegisterModal);
    setShowLoginModal(!showLoginModal);
  };

  return (
    <>
      <UnauthMenuContainerDiv>
        <div className="container">
          <p className="wrap">
            <span className="login" onClick={closeLoginModal}>로그인</span>이 필요합니다
          </p>
          나에게 딱 맞는 멘토를 찾아 질문을 해주세요
          <button onClick={closeRegisterModal}>멘토링 시작하기</button>
        </div>
      </UnauthMenuContainerDiv>
      {showRegisterModal && (
        <RegisterModal
          closeRegisterModal={closeRegisterModal}
          changeModal={changeModal}
        />
      )}
      {showLoginModal && (
        <LoginModal
          closeLoginModal={closeLoginModal}
          changeModal={changeModal}
        />
      )}
    </>
  );
};
export default UnauthMenu;