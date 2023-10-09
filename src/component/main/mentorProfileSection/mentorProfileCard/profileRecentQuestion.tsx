import {ProfileRecentQuestionContainerDiv} from "@/component/main/mentorProfileSection/profileCard.style";
import {useEffect, useState} from "react";

interface dataType {
  lastAnswerList: any
}
const ProfileRecentQuestion = ({lastAnswerList}: dataType) => {
  const [answerList, setAnswerList] = useState<string[]>();
  useEffect(() => {
    if (lastAnswerList.length > 1) {
      setAnswerList(lastAnswerList)
    } else if (lastAnswerList.length === 0) {
      setAnswerList(["아직 답변한 질문이 없습니다"])
    } else {
      const list = [lastAnswerList]
      setAnswerList(list)
    }
  }, [lastAnswerList])
  return (
    <ProfileRecentQuestionContainerDiv className="column">
      <div className="titleBox">최근 답변한 질문</div>
      <div className="questionWrap">
        {answerList && answerList.map((data, index) => {
          return (
            <p key={index} className="ellipsis">{data}</p>
          )
        })}
      </div>
    </ProfileRecentQuestionContainerDiv>
  );
}
export default ProfileRecentQuestion;