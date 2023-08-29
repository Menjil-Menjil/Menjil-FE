//참고: https://velog.io/@leemember/React-%EB%94%B0%EB%9D%BC%EB%8B%A4%EB%8B%88%EB%8A%94-Top-%EB%B2%84%ED%8A%BC-scroll-to-top-%EB%A7%8C%EB%93%A4%EA%B8%B0
import {useEffect, useState} from "react";
import styled from "@emotion/styled";
import ic_top from "@/img/ic_edit.png"
import Image from "next/image";

export const TopButtonDiv = styled.div`
  position: fixed;
  bottom: 32px;
  right: 184px;
  cursor: pointer;
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
          <div onClick={handleScroll}>
            <Image src={ic_top} alt="top" width={40} height={40}/>
          </div>
        )}
    </TopButtonDiv>
  );
};
export default TopButton;