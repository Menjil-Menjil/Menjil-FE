import {ProfileRecentQuestionContainerDiv} from "@/component/main/mentorProfileSection/profileCard.style";
import {useEffect, useState} from "react";

interface dataType {
  lastAnswerList: any
}
const ProfileRecentQuestion = ({lastAnswerList}: dataType) => {
  const [answerList, setAnswerList] = useState<any[]>();
  useEffect(() => {
    if (lastAnswerList && typeof lastAnswerList === "string") {
      const list = [lastAnswerList]
      setAnswerList(list)
    } else {
      setAnswerList(lastAnswerList)
    }
  }, [lastAnswerList])
  return (
    <ProfileRecentQuestionContainerDiv className="column">
      <div className="textStyleQuestionTitle marginBottom">최근 답변한 질문</div>
      <div>
        {answerList && answerList.map((value, index) => {
          return (<p key={index} className="ellipsis">{value}</p>)
        })}
      </div>
    </ProfileRecentQuestionContainerDiv>
  );
}
export default ProfileRecentQuestion;