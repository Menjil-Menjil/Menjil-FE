import styled from "@emotion/styled";
import ProfileAnswerCard from "@/component/follows/profileAnswers/profileAnswerCard";

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
        p {
          margin: 0;
          padding: 0;
          color: #000;
          font-size: 14px;
          font-weight: 500;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
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
  .scrollBox {
    height: 470px;
    overflow: auto;
  }
  .scrollBox::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

interface props {
  answerList: any[]|undefined
}
const ProfileAnswers = ({answerList}: props) => {
  return (
    <ProfileAnswersContainerDiv>
      <div className="lineBarBox">
        <p className="answerBox">문답제목</p>
        <p className="viewsBox">조회수</p>
        <p className="likesBox">추천수</p>
        <p className="postDateBox">작성일자</p>
      </div>
      <div className="scrollBox">
        {answerList && answerList.map((data, index) => {
          return (
            <ProfileAnswerCard key={index}
                               questionOrigin={data.questionOrigin}
                               questionSummary={data.questionSummary}
                               answer={data.answer}
                               answerTime={data.answerTime}
            />)
        })}
      </div>
    </ProfileAnswersContainerDiv>
  );
};

export default ProfileAnswers;