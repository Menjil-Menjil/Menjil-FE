import styled from "@emotion/styled";

export const UserProfileContainerDiv = styled.div`
  height: 101px;
  position: relative;
  margin-top: 15px;
  .profileInfo {
    margin-left: 20px;
    overflow: hidden;
    .profileImgBox {
      position: relative;
      width: 50px;
      height: 50px;
      margin-top: 5px;
      border-radius: 12px;
      overflow: hidden;
    }
    .profileContent {
      position: absolute;
      top: 3px;
      left: 85px;
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
    position: absolute;
    top: 0;
    right: 20px;
    width: 94px;
    height: 34px;
    flex-shrink: 0;
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
  .wrapper {
    width: 222px;
    height: 13px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
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
  margin-top: 18px;
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
`;

export const ChattingCardDiv = styled.div`
  width: 100%;
  height: 92px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: 15px;
  box-sizing: border-box;
  border-bottom: 1px solid #E0E0E0;
  cursor: pointer;
  p {
    width: 223px;
    height: 45px;
    margin: 0;
    padding: 0;
  }
  .mentorImgBox {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 12px;
    overflow: hidden;
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
  .timeTextColor {
     color: #FF8A00;
  }
  .circle {
    margin-left: 5px;
    width: 7px;
    height: 7px;
    background-color: #FF8A00;
    border-radius: 50%;
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
  .wrapper {
    display: flex;
    align-items: center;
  }
`;

export const UnauthMenuContainerDiv = styled.div`
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
  }
`;