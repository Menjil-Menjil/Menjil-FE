import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  width: 667px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
`;
export const ProgressBar = styled.progress`
  width: 100%;
  height: 15px;
  margin: 50px auto;
  appearance: none;
  display: flex;
  ::-webkit-progress-bar{
    background: #f0f0f0;
    border-radius: 25px;
  }
  ::-webkit-progress-value{
    border-radius:25px;
    background: var(--highlighted-element);
  }
`
export const Commentary = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
`;

interface propsType{
  progressNumber: number;
}

const RegisterHeader = ({progressNumber}:propsType) => {
  return(
    <HeaderContainer>
      <ProgressBar value={progressNumber} max="100"/>
      <Commentary>반갑습니다 {"최병준"}님!<br/>시작하기 전 몇 가지 정보가 필요해요</Commentary>
    </HeaderContainer>
  );
};

export default RegisterHeader;