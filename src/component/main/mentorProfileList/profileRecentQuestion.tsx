import {ProfileRecentQuestionContainerDiv} from "@/component/main/mentorProfileList/profileCard.style";

const ProfileRecentQuestion = () => {
  return (
    <ProfileRecentQuestionContainerDiv className="column">
      <div className="textStyleQuestionTitle marginBottom">최근 답변한 질문</div>
      <div>
        <p>{"자소서에 다른 직무 유형은 어떻게 작성하면 좋을까요?"}</p>
        <p>{"입사 후 포부 문항 작성 요령이 궁금합니다."}</p>
      </div>
    </ProfileRecentQuestionContainerDiv>
  );
}
export default ProfileRecentQuestion;