import styled from "@emotion/styled";

export const ProfileAnswersContainerDiv = styled.div`
  margin: 25px 30px;
  color: rgba(0, 0, 0, 0.80);
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 19.5px */
  .lineBarBox {
    padding: 0 10px;
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.10);
    p {
      color: #493E3E;
      font-size: 12px;
      font-weight: 500;
      line-height: 150%; /* 18px */
    }
    .alignBox {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .answerBox {
      width: 655px;
      gap: 5px;
      margin: 14px 0 10px 0;
      .wrapper {
        display: flex;
        gap: 20px;
        font-size: 14px;
        font-weight: 500;
        .icon {
          font-size: 16px;
          font-weight: 600;
        }
        .qColor {
          color: #707070;
        }
      }
      .answer {
        color: #000;
        .aColor {
          color: #FF8A00;
        }
      }
    }
    .viewsBox {
      width: 72px;
    }
    .likesBox {
      width: 72px;
    }
    .postDateBox {
      width: 111px;
    }
  }
`;
const ProfileAnswers = () => {
  return (
    <ProfileAnswersContainerDiv>
      <div className="lineBarBox">
        <p className="answerBox">문답제목</p>
        <p className="viewsBox">조회수</p>
        <p className="likesBox">추천수</p>
        <p className="postDateBox">작성일자</p>
      </div>
      <div className="lineBarBox">
        <div className="answerBox alignBox">
          <div className="wrapper">
            <div className="icon qColor">Q</div>
            멘티의 질문 제목
          </div>
          <div className="wrapper answer">
            <div className="icon aColor">A</div>
            답변 요약본의 한 줄 (이후 ...)
          </div>
        </div>
        <div className="viewsBox alignBox">0</div>
        <div className="likesBox alignBox">0</div>
        <div className="postDateBox alignBox">2023년 09월 15일</div>
      </div>
    </ProfileAnswersContainerDiv>
  );
};

export default ProfileAnswers;