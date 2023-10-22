interface props {
  questionOrigin: string,
  questionSummary: string,
  answer: string,
  answerTime: string
}
const ProfileAnswerCard = ({questionOrigin, questionSummary, answer, answerTime}: props) => {
  const answerDate = new Date(answerTime)
    .toLocaleDateString("ko-KR", {year: "numeric", month: "long", day: "numeric" });
  return (
    <div className="lineBarBox">
      <div className="answerBox alignBox">
        <div className="wrapper">
          <div className="icon qColor">Q</div>
          {questionSummary}
        </div>
        <div className="wrapper answer">
          <div className="icon aColor">A</div>
          <p>{answer}</p>
        </div>
      </div>
      <div className="viewsBox alignBox">0</div>
      <div className="likesBox alignBox">0</div>
      <div className="postDateBox alignBox">{answerDate}</div>
    </div>
  );
};
export default ProfileAnswerCard;