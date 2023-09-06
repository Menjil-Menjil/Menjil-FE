import styled from "@emotion/styled";

export const FollowCardDiv = styled.div`
  width: 385px;
  height: 391px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 0 solid #BEBEBE;
  background: rgba(244, 243, 241, 0.47);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
  color: black;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  .highlightedColor {
    color: #FF8A00;
  }
  .normalColor {
    color: #737373;
  }
  p {margin: 0; padding: 0;}
  .cardWrap {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 25px;
    .unfollowBtn {
      position: absolute;
      right: 0;
      cursor: pointer;
    }
    .line {
      width: 1px;
      height: 13px;
      background: #BEBEBE;
    }
    .hr {
      width: 100%;
      height: 1px;
      background: #EBEAE8;
      margin: 20px auto;
    }
  }
  .container {
    display: flex;
  }
  .containerTitle {
    height: 50px;
    margin-bottom: 25px;
    align-items: center;
    gap: 15px;
    .titleText {
      font-size: 17px;
      font-weight: 700;
      line-height: 150%; /* 25.5px */
    }
    .wrap {
      display: flex;
      gap: 15px;
    }
  }
  .containerJob {
    position: relative;
    height: 49px;
    margin: 0 0 15px 3px;
    gap: 17px;
    .wrap {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      .line-wrap {
        display: flex;
        align-items: center;
        gap: 8px;
        .stackBox {
          display: flex;
          padding: 2px 8px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 5px;
          background: #EBEAE8;
          * {font-size: 13px;}
        }
      }
    }
  }
  .containerSchool {
    height: 25px;
    gap: 12px;
    .wrap {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
  .containerQuestion {
    flex-direction: column;
    gap: 8px;
    .titleText {
      margin-bottom: 7px;
      font-size: 13px;
      font-weight: 600;
    }
  }
  .containerBtnGroup {
    justify-content: center;
    margin: 25px auto;
    gap: 15px;
    button {
      width: 160px;
      height: 39px;
      flex-shrink: 0;
      border: none;
      border-radius: 12px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
    }
    .chatBtn {
      background: #FF8A00;
      color: white;
    }
    .moreBtn {
      background: white;
      color: #FF8A00;
    }
  }
`;