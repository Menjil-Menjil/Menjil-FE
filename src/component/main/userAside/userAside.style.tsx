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
          cursor: pointer;
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
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  button {
    display: flex;
    align-items: center;
    margin: 0 18px 0 auto;
    border: none;
    background: none;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.70);
    font-size: 11px;
    font-weight: 500;
    * {
      stroke: rgba(0, 0, 0, 0.70);
    }
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

export const AsideListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChatLogCardDiv = styled.div`
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
  .techStyle {
    color: var(--text-color);
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

export const FollowingCardDiv = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 15px;
  box-sizing: border-box;
  border-top: 1px solid #E0E0E0;
  color: black;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    overflow: hidden;
    p { margin: 0; padding: 0; }
    .wrapper {
      display: flex;
      align-items: center;
      .line {
        width: 1px;
        height: 10px;
        margin: 0 8px;
        background: #ADADAD;
      }
    }
    .title {
      font-size: 14px;
      font-weight: 600;
    }
    .techStack {
      width: 205px;
      color: rgba(0, 0, 0, 0.70);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      span {
        margin: 0 4px;
      }
    }
  }
  .unfollowBtn {
    position: absolute;
    top: 12px;
    right: 20px;
    cursor: pointer;
  }
`;

export const UnauthMenuContainerDiv = styled.div`
  height: 147px;
  color: black;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 140.836%;
  p {margin: 0; padding: 0;}
  button {
    width: 287px;
    height: 42px;
    margin-top: 20px;
    cursor: pointer;
    border: none;
    border-radius: 12px;
    background: #FF8A00;
    color: #FFF;
    text-shadow: 0 0 2px #E88510;
    font-size: 14px;
    font-weight: 700;
  }
  .container {
    height: 107px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .wrap {
    font-size: 16px;
  }
  .login {
    color: rgba(0, 0, 0, 0.60);
    font-weight: 600;
    cursor: pointer;
    :hover {
      color: #FF8A00;
    }
  }
`;