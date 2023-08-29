import styled from "@emotion/styled";

export const UserProfileContainerDiv = styled.div`
  height: 107px;
  position: relative;
  .profileInfo {
    margin: 15px 0 0 20px;
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
      top: 18px;
      left: 85px;
      .titleWrapper {
        display: flex;
        align-items: center;
        .editIconBox {
          position: relative;
          width: 20px;
          height: 20px;
          margin-left: 5px;
          overflow: hidden;
        }
      }
      .line {
        width: 1px;
        height: 13px;
        background: var(--textline-color);
        margin: 0 7px;
      }
    }
    .marginB8 {
      margin-bottom: 8px;
    }
    .marginB5 {
      margin-bottom: 5px;
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
      color: var(--text-color);
      font-size: 14px;
      font-weight: 500;
      line-height: normal;
    }
    .userInfoTitleStyle {
      color: black;
      font-size: 16px;
      font-weight: 600;
      line-height: 150%; /* 24px */
    }
  }
  .btnLogout {
    position: absolute;
    top: 15px;
    right: 20px;
    width: 94px;
    height: 34px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    cursor: pointer;
    .btnLogoutTextMargin {
      margin: 0 4px 0 14px;
    }
    .btnLogoutTextStyle {
      color: var(--logout-btn-text-color);
      font-size: 14px;
      font-weight: 400;
    }
  }
`;

export const AsideBtnGroup = styled.div`
  width: 100%;
  height: 47px;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--border-color);
  * {
    font-size: 15px;
    font-weight: 600;
  }
  button {
    margin: 0 18px 0 auto;
    border: none;
    background: none;
    cursor: pointer;
  }
  .radioBtnGroup {
    display: flex;
    margin-left: 20px;
    gap: 15px;
    input[type="radio"] {
      display: none;
    }
    label {
      cursor: pointer;
      color: var(--text-color);
    }
    input[type="radio"]:checked + label{
      color: black;
    }
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
  border-top: 1px solid var(--border-color);
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
    color: var(--border-color);
    text-align: right;
    font-size: 12px;
    font-weight: 500;
  }
  .timeTextColor {
     color: var(--highlighted-element);
  }
  .circle {
    margin-left: 5px;
    width: 7px;
    height: 7px;
    background-color: var(--highlighted-element);
    border-radius: 50%;
  }
  .textStyle {
    color: black;
    font-size: 14px;
    font-weight: 400;
    line-height: 160%; /* 22.4px */
  }
  .titleStyle {
    color: black;
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