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
  careerData: any,
  title: string,
  subtitle: any
}
const ProfileCareer = ({careerData, title, subtitle}: props) => {
  return (
    <ProfileCareerContainerDiv>
      <div className="recentBox">
        <div className="title">{title}</div>
        {subtitle && <div className="subTitle">{subtitle}</div>}
        <div className="term">2021.12 ~ 현재</div>
      </div>
      <div className="careerListBox">
        {careerData && careerData.split(",").map((data: any, index: number) => {
          return (
            <div key={index}>{data}</div>
          )
        })}
      </div>
    </ProfileCareerContainerDiv>
  );
};
export default ProfileCareer;