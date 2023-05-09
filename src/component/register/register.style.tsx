import styled from '@emotion/styled'

export const FormContainerDiv = styled.div`
  width: 667px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;
export const TitleBoxDiv = styled.div`
  margin-bottom: 50px;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
  > span {
    padding: 0 0.3em;
    background: linear-gradient(to top, #FBBC053B 50%, transparent 50%);
  }
`;
export const InputContainer = styled.div`
  .titleBox{
    margin-top: 50px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  }
  .subtitleBox {
    color: #525252;
    margin-top: 15px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
  }

  input {
    height: 60px;
    padding: 0 0.3em 0 0.8em;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }
  input:focus {
    outline-color: var(--highlighted-element);
  }
  
  .inputBox {
    margin-top: 15px;
  }
  .inputBox::placeholder {
    color: var(--input-placeholder);
  }
  .selectBox {
    display: none;
  }
  .selectBox + label {
    width: 166px;
    height: 60px;
    margin-top: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: var(--input-placeholder);
  }
  .selectBox + label:hover {
    background-color: var(--selected-element);
  }
  .selectBox + label:active {
    background-clip: content-box;
    padding: 4px;
    background-color: var(--selected-element);
  }
  .selectBox:checked + label {
    background-color: var(--selected-element);
    border: 1px solid var(--highlighted-element);
    color: black;
  }
  .addBtn {
    height: 60px;
    background: #E3E2E2;
    border: none;
    border-radius: 12px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #6B6565;
  }
  .scoreRadioContainer {
    width: 300px;
    height: 60px;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    .scoreRadioBox {
      display: none;
    }
    .scoreRadioBox + label {
      width: 92px;
      height: 52px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: var(--input-placeholder);
    }
    .scoreRadioBox + label:hover {
      background-color: var(--selected-element);
    }
    .scoreRadioBox:checked + label {
      background-color: var(--selected-element);
      color: black;
    }
  }
  .searchContainer {
    margin-top: 15px;
    display: flex;
    align-items: center;
    .icon {
      transform: translateX(-40px);
    }
    .icon:hover {
      border: 2px solid #f0f0f0;
      border-radius: 4px;
      transform: translateX(-42px);
      background-color: #f0f0f0;
    }
    .searchBox {
      padding-right: 48px;
    }
    .searchBox::placeholder {
      color: var(--input-placeholder);
    }
    > input[type=submit]{
      display: none;
    }
  }
`;