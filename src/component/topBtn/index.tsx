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
  .div {
    width: 51px;
    height: 51px;
  }
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
            <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none">
              <g filter="url(#filter0_d_1114_304)">
                <circle cx="33.5" cy="32.5" r="25.5" fill="white"/>
                <circle cx="33.5" cy="32.5" r="24.5" stroke="black" strokeOpacity="0.2" strokeWidth="2"/>
              </g>
              <path d="M23 36L33.5 25L44 36" stroke="black" strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <filter id="filter0_d_1114_304" x="0" y="0" width="67" height="67" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="1"/>
                  <feGaussianBlur stdDeviation="4"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1114_304"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1114_304" result="shape"/>
                </filter>
              </defs>
            </svg>
          </div>
        )}
    </TopButtonDiv>
  );
};
export default TopButton;