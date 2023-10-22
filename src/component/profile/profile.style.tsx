import styled from "@emotion/styled";

export const ProfileBox = styled.div`
  width: 775px;
  height: 796px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background: #FAF9F8;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
`;
export const ProfileContentBox = styled.div`
  width: 775px;
  height: 246px;
  flex-direction: column;
  border-radius: 12px 12px 0 0;
  background: #FFF;
  .profileInfo {
    display: flex;
    margin: 30px 30px;
    gap: 15px;
    .wrap {
      display: flex;
      flex-direction: column;
    }
    .titleWrap {
      display: flex;
      align-items: center;
      gap: 10px;
      color: black;
      .role {
        display: flex;
        width: 38px;
        height: 22px;
        border-radius: 33px;
        border: 0.7px solid #A8A8A8;
        color: #686868;
        background: #F6F6F6;
        justify-content: center;
        align-items: center;
        font-size: 11px;
        font-weight: 600;
      }
      .nickname {
        max-width: 96px;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 30px */
        margin-right: 5px;
      }
    }
    .contentWrap {
      margin: 19px 0 0 5px;
      display: flex;
      color: rgba(0, 0, 0, 0.60);
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      .skillInfo {
        display: flex;
        flex-direction: column;
        gap: 12px;
        .skillBox {
          display: flex;
          gap: 20px;
          .techData {
            margin-left: 9px;
          }
          .data {
            max-width: 360px;
            display: flex;
            flex-wrap: wrap;
            color: #444;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            .majorTag {
              height: 15px;
              margin-right: 5px;
              padding: 0 2px;
              display: flex;
              border-radius: 6px;
              border: 0.8px solid rgba(0, 0, 0, 0.70);
              font-size: 10px;
              justify-content: center;
              align-items: center;
            }
            .field {
              color: #444;
              font-size: 13px;
              font-weight: 500;
              margin: 0 9px 5px 0;
            }
            .techStack {
              color: #000;
              font-weight: 400;
              margin: 0 9px 5px 0;
            }
          }
          .emphasis {
            color: rgba(0, 0, 0, 0.80);
            font-weight: 600;
          }
        }
      }
    }
  }
`;