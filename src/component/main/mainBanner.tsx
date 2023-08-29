import Image from "next/image";
import bannerImg from "@/img/img_main_main-banner-div.png";
import styled from "@emotion/styled";

export const MainBannerDiv = styled.div`
  width: 1353px;
  height: 292px;
  margin-top: 40px;
  border-radius: 12px;
  box-shadow: 0 0 4px 0 var(--box-shadow);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .mainBannerCopy {
    position: absolute;
    color: white;
    text-align: center;
    text-shadow: var(--banner-copy-text-shadow) 0 0 4px;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const MainBanner = () => {
  return (
    <MainBannerDiv>
      <Image src={bannerImg} alt="banner" fill sizes="80vw" style={{objectFit: "cover", objectPosition: "0 60%"}} placeholder="blur"
             blurDataURL={"@/img/img_main_main-banner-div.png"}/>
      <p className="mainBannerCopy">
        간단하게 질문하고 정확한 답변받기<br/>멘질멘질
      </p>
    </MainBannerDiv>
  );
}

export default MainBanner;