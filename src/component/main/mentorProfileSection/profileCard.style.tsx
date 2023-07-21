import styled from "@emotion/styled";

export const MentorProfileSectionTitleDiv = styled.div`
  padding-left: 40px;
  height: 71px;
  display: flex;
  align-items: center;
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-bottom: solid 1px rgba(0, 0, 0, 0.12);
`;

export const ProfileCardDiv = styled.div`
  width: 100%;
  height: 144px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  display: flex;
  font-size: 14px;
  font-weight: 500;
  .line {
    width: 1px;
    height: 13px;
    background: #BEBEBE;
  }
  .profileImageBox {
    width: 100px;
    height: 100px;
    margin-left: 40px;
    border-radius: 12px;
    justify-content: center;
  }
  .profileContentBox {
    margin-left: 20px;
    .profileJobBox {
      width: 105px;
      height: 25px;
      border-radius: 6px;
      background: rgba(255, 138, 0, 0.20);
      justify-content: center;
    }
    .textStyleNickname {
      font-size: 17px;
      font-weight: 700;
      line-height: 150%; /* 25.5px */
    }
    .textStyleTech {
      color: #707070;
    }
    .gap10 { gap: 10px; }
    .gap12 { gap: 12px; }
    .marginBottom { margin-bottom: 1px; }
    .marginLeft { margin-left: 5px; }
  }
`;
export const ProfileRecentQuestionContainerDiv = styled.div`
  //margin-left: 58px;
  font-size: 15px;
  font-weight: 500;
  p {
    margin: 8px 0 0 0;
    padding: 0;
  }
  .textStyleQuestionTitle {
      color: #707070;
      font-weight: 700;
    }
  .marginBottom {
      margin-bottom: 8px;
    }
`;
export const ProfileBtnContainerDiv = styled.div`
  margin-right: 40px;
  justify-content: end;
  font-size: 16px;
  font-weight: 600;
  gap: 7px;
  div {
    width: 119px;
    height: 38px;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .btnQuestion {
    border-radius: 12px;
    border: 1px solid #FF8A00;
    color: #FF8A00;
  }
  .btnFollow {
    border: none;
    color: #6A6969;
    justify-content: center;
  }
  .icBoxQuestion {
    width: 24px;
    height: 24px;
    margin: 4px 8px 0 13px;
  }
  .icBoxFollow {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;