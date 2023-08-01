import styled from "@emotion/styled";

export const UserProfileContainerDiv = styled.div`
  margin: 15px 20px 0 20px;
  display: flex;
  justify-content: space-between;
  .profileInfo {
    .profileImgBox {
      width: 50px;
      height: 50px;
      margin-top: 5px;
      border-radius: 12px;
    }
    .profileContent {
      margin: 3px 0 0 15px;
    }
    .line {
      width: 1px;
      height: 13px;
      background: #BEBEBE;
      margin: 0 7px;
    }
    .marginB8 {
      margin-bottom: 8px;
    }
    .marginB3 {
      margin-bottom: 3px;
    }
  }
  .btnLogout {
    width: 94px;
    height: 34px;
    border-radius: 12px;
    border: 1px solid #D8D8D8;
    display: flex;
    align-items: center;
    cursor: pointer;
    .btnLogoutTextMargin {
      margin: 0 4px 0 14px;
    }
    .btnLogoutTextStyle {
      color: #898989;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .wrap {
    display: flex;
    flex-wrap: wrap;
  }
  .center {
    align-items: center;
  }
  .userInfoTextStyle {
    color: #707070;
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
  }
  .userInfoTitleStyle {
    color: #000;
    font-size: 16px;
    font-weight: 600;
    line-height: 150%; /* 24px */
  }
`;

export const AsideBtnGroup = styled.div`
  display: flex;
  align-items: center;
  * {
    font-size: 15px;
    font-weight: 600;
  }
  input[type="radio"] {
    display: none;
  }
  label {
    margin: 0 6px 0 20px;
    cursor: pointer;
    color: #707070;
  }
  input[type="radio"]:checked + label{
    color: rgba(0, 0, 0, 0.80);
  }
  button {
    margin: 0 43px 0 auto;
    border: none;
    background: none;
    cursor: pointer;
  }
`

export const ChattingListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6px;
  gap: 11px;
`;

export const ChattingCardDiv = styled.div`
  width: 100%;
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  border-bottom: 1px solid #E0E0E0;
  cursor: pointer;
  p {
    width: 204px;
    height: 45px;
    margin: 0;
    padding: 0;
  }
  .spaceBetween {
    display: flex;
    justify-content: space-between;
  }
  .timeText {
    color: #707070;
    text-align: right;
    font-size: 12px;
    font-weight: 500;
  }
  .textStyle {
    color: #000;
    font-size: 14px;
    font-weight: 400;
    line-height: 160%; /* 22.4px */
  }
  .titleStyle {
    color: #000;
    font-size: 16px;
    font-weight: 600;
  }
  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;