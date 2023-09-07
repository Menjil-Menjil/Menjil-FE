//참고: https://velog.io/@leemember/React-%EB%94%B0%EB%9D%BC%EB%8B%A4%EB%8B%88%EB%8A%94-Top-%EB%B2%84%ED%8A%BC-scroll-to-top-%EB%A7%8C%EB%93%A4%EA%B8%B0
import {useEffect, useState} from "react";
import styled from "@emotion/styled";
import topBtnImg from "@/img/img_top_btn.png"
import Image from "next/image";

export const TopButtonDiv = styled.div`
  position: sticky;
  top: 580px;
  margin-left: 276px;
  cursor: pointer;
  z-index: 2;
`;

const TopButton = () => {
  const [showButton, setShowButton] = useState<boolean>(false);
  const handleScroll = () => {
    if (!window.scrollY) return

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  };
  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }
    window.addEventListener('scroll', handleShowButton)
    return () => {
      window.removeEventListener('scroll', handleShowButton)
    }
  }, []);

  return (
    <TopButtonDiv>
        {showButton && (
          <Image src={topBtnImg} alt="top" onClick={handleScroll} width={51} height={51}/>
        )}
    </TopButtonDiv>
  );
};
export default TopButton;