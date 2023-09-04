import {FollowCardDiv} from "@/component/follows/followCard/followCard.style";
import profileImg from "@/img/img_default-profile.png"
import unfollowIc from "@/img/ic_unfollow.png"
import JobIc from "@/img/ic_job.svg"
import SchoolIc from "@/img/ic_school.svg"
import Image from "next/image";

const profileStyle = {
  borderRadius: '12px'
}
const FollowCard = () => {
  return (
    <FollowCardDiv>
      <div className="cardWrap">
        <Image src={unfollowIc} className="unfollowBtn" alt="profile" width={24} height={24} />
        <div className="container containerTitle">
          <Image src={profileImg} alt="profile" width={50} height={50} style={profileStyle}/>
          <div>
            <p className="titleText">박서영</p>
            <div className="wrap">
              <p className="highlightedColor">멘티 23명</p>
              <p className="normalColor">답변 26개</p>
            </div>
          </div>
        </div>
        <div className="container containerJob">
          <JobIc/>
          <div className="wrap">
            <div className="line-wrap">
              <p>네이버클라우드</p>
              <div className="line"/>
              <p>프론트엔드</p>
            </div>
            <div className="line-wrap">
              <div className="stackBox">
                <p className="normalColor">React</p>
              </div>
              <div className="stackBox">
                <p className="normalColor">NEXT.JS</p>
              </div>
              <div className="stackBox">
                <p className="normalColor">GitHub</p>
              </div>
              <div className="stackBox">
                <p className="normalColor">Redux</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container containerSchool">
          <SchoolIc/>
          <div className="wrap">
            <p>서울과학기술대학교</p>
            <div className="line"/>
            <p>컴퓨터공학 전공</p>
          </div>
        </div>
        <div className="hr"/>
        <div className="container containerQuestion">
          <p className="titleText normalColor">최근 답변한 질문</p>
          <p>자소서에 다른 직무 유형은 어떻게 작성하면 좋을까요?</p>
          <p>입사 후 포부 문항 작성 요령이 궁금합니다.</p>
        </div>
      </div>
      <div className="container containerBtnGroup">
        <button className="chatBtn">채팅하기</button>
        <button className="moreBtn">프로필 더보기</button>
      </div>

    </FollowCardDiv>
  );
};
export default FollowCard;