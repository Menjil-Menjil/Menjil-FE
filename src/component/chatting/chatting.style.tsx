import styled from "@emotion/styled";

export const ChatLogContainerDiv = styled.div`
  width: 100%;
  min-height: 500px;
  margin: 40px 0 10px 0;
  padding: 6px 0;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  form {
    padding: 0;
    margin: 0;
    display: flex;
  }
  .messageBoxServer {
    width: max-content;
    max-width: 500px; // 최대 넓이
    margin: 6px auto 6px 10px;
    padding: 0.6em 0.8em 0.6em 1em;
    border: 1px solid black;
    border-radius: 0 4px 4px 4px;
    display: flex;
    align-items: center;
    word-break: keep-all; // 단어 기준 줄바꿈
  }
  .messageBoxClient {
    width: max-content;
    max-width: 500px;
    margin: 6px 10px 6px auto;
    padding: 0.6em 0.8em 0.6em 1em;
    border: 1px solid black;
    border-radius: 4px 0 4px 4px;
    display: flex;
    align-items: center;
    word-break: keep-all;
  }
`;

export const SendMessageContainerForm = styled.form`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  input {
    width: 890px;
    height: 60px;
    padding: 0 0.3em 0 0.8em;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }
  input:focus {
    border-color: var(--highlighted-element);
    outline: none;
  }
  button {
    height: 60px;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    cursor: pointer;
  }
  .submitBtn {
    width: 100px;
    background: var(--highlighted-element);
  }
`;