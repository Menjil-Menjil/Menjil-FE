import styled from "@emotion/styled";

export const MentorProfileSectionTitleDiv = styled.div`
  padding-left: 40px;
  height: 71px;
  display: flex;
  align-items: center;
  color: black;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ProfileCardDiv = styled.div`
  width: auto;
  height: 144px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  flex-shrink: 0;
  border-top: solid 1px rgba(0, 0, 0, 0.12);
  .column {
    display: flex;
    flex-direction: column;
  }
  .center {
    display: flex;
    align-items: center;
  }
  .gap3 { gap: 3px}
  .gap16 { gap: 16px }
`;

export const ProfileContentContainerDiv = styled.div`
  margin-left: 40px;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  .line {
    width: 1px;
    height: 13px;
    background: var(--textline-color);
  }
  .profileImageBox {
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 12px;
    justify-content: center;
    overflow: hidden;
  }
  .profileContentBox {
    width: 250px;
    margin-left: 20px;
    gap: 6px;
    overflow: hidden;
    .profileJobBox {
      width: 105px;
      height: 25px;
      border-radius: 6px;
      background: var(--job-info-bg-color);
      justify-content: center;
    }
    .textStyleNickname {
      font-size: 17px;
      font-weight: 700;
      line-height: 150%; /* 25.5px */
    }
    .techStack {
      width: 100%;
      display: inline;
      color: var(--text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      span {
        margin: 0 5px;
      }
    }
    .gap8 { gap: 8px }
    .gap10 { gap: 10px; }
    .marginBottom { margin-bottom: 1px; }
    .marginLeft { margin-left: 5px; }
  }
`;
export const ProfileRecentQuestionContainerDiv = styled.div`
  font-size: 15px;
  font-weight: 500;
  line-height: normal;
  p {
    width: 320px;
    height: 18px;
    margin: 0;
    padding: 0;
  }
  .titleBox {
    color: var(--text-color);
    font-weight: 700;
    margin-bottom: 16px;
  }
  .questionWrap {
    min-width: 315px;
    height: 44px;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const ProfileBtnContainerDiv = styled.div`
  margin-right: 40px;
  justify-content: end;
  font-size: 16px;
  font-weight: 600;
  gap: 7px;
  button {
    width: 119px;
    height: 38px;
    position: relative;
    background: none;
    flex-shrink: 0;
    box-sizing: border-box;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .btnQuestion {
    border: 1px solid var(--highlighted-element);
    color: var(--highlighted-element);
  }
  .btnFollow {
    border: none;
    color: var(--follow-btn-text-color);
  }
  .btnFollowChecked {
    border: none;
    color: white;
    background-color: var(--follow-btn-text-color);
    * {
      fill: white;
      stroke: white;
    }
  }
  .btnContent {
    height: 24px;
    position: absolute;
    top: 9px;
    left: 13px;
    display: flex;
    gap: 8px;
  }
`;