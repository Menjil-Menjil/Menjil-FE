import styled from "@emotion/styled";

export const ProfileCareerContainerDiv = styled.div`
  margin: 30px 40px;
  display: flex;
  color: rgba(0, 0, 0, 0.80);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
  .recentBox {
    width: 215px;
    display: flex;
    flex-direction: column;
    .title {
      margin-bottom: 5px;
      font-size: 18px;
    }
    .subTitle {
      color: rgba(0, 0, 0, 0.80);
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 10px;
    }
    .term {
      color: #606060;
      font-size: 12px;
      font-weight: 500;
    }
  }
  .careerListBox {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
interface props {
  careerData: any
}
const ProfileCareer = ({careerData}: props) => {
  const subTitle = careerData.split(" ")[0];
  return (
    <ProfileCareerContainerDiv>
      <div className="recentBox">
        <div className="title">Shopby</div>
        {subTitle && <div className="subTitle">subTitle</div>}
        <div className="term">2021.12 ~ 현재</div>
      </div>
      <div className="careerListBox">
        <div>Shopby 라인업 유지보수 및 레거시 환경 개선</div>
        <div>Shopby Pro Modern Skin 신규 스킨 개발</div>
        <div>Shopby Pro Skin 기본 스킨 개발(Another 스킨)</div>
        <div>Shopby Pro Admin 회원・운영 개발</div>
      </div>
    </ProfileCareerContainerDiv>
  );
};
export default ProfileCareer;