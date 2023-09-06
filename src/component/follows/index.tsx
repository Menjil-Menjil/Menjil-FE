import styled from "@emotion/styled";
import FollowCard from "@/component/follows/followCard";
export const FollowsContainerDiv = styled.div`
  width: 1300px;
  min-height: 600px;
  margin: 91px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  .cardList {
    width: 1215px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;
  }
`;

const Follows = () => {
  return (
    <FollowsContainerDiv>
      <div className="cardList">
        <FollowCard/>
        <FollowCard/>
        <FollowCard/>
        <FollowCard/>
        <FollowCard/>
        <FollowCard/>
        <FollowCard/>
      </div>

    </FollowsContainerDiv>
  );

};

export default Follows;