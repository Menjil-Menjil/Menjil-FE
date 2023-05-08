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
  .inputBox {
    height: 60px;
    margin-top: 15px;
    padding-left: 0.8em;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }
  .inputBox::placeholder {
    color: var(--input-placeholder);
  }
  .radioContainer {
    width: 166px;
    height: 60px;
    margin-top: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    .radioBox {
      display: none;
    }
    .radioBox + label {
      width: 158px;
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
    .radioBox:checked + label {
      background-color: var(--selected-element);
      color: black;
    }
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
    .scoreRadioBox:checked + label {
      background-color: var(--selected-element);
      color: black;
    }
  }
  .checkBox {
    display: none;
  }
  .checkBox + label {
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
  .checkBox:checked + label {
    background-color: var(--selected-element);
    border-color: var(--highlighted-element);
    color: black;
  }
  .searchContainer {
    .icon {
      position: relative;
      top: 5px;
      left: -40px;
    }
    .searchBox {
      height: 60px;
      margin-top: 15px;
      padding-left: 0.8em;
      padding-right: 48px;
      box-sizing: border-box;
      border: 1px solid rgba(0, 0, 0, 0.5);
      border-radius: 12px;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      background-image: url("../../img/ic_search.png");
      background-repeat: no-repeat;
      background-size: 24px;
      background-position: 160px center;
    }
    .searchBox::placeholder {
      color: var(--input-placeholder);
    }
  }
`;
export const InputBox = styled.input``;