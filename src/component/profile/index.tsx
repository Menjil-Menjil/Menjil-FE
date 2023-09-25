import styled from "@emotion/styled";

export const ProfileContainerDiv = styled.div`
  width: 1300px;
  min-height: 600px;
  margin: 68px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

const Profile = () => {
  return (
    <ProfileContainerDiv>
      프로필
    </ProfileContainerDiv>
  );
};
export default Profile;