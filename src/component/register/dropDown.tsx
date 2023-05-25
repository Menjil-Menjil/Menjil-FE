import styled from "@emotion/styled";
import Image from "next/image";
import DownIc from "@/img/ic_dropdown.svg"
import {useContext, useEffect, useRef, useState} from "react";
import useDetectClose from "@/hooks/useDetectClose";
import RegisterComponentContext from "@/context/RegisterComponentContext";

export const DropDownBox = styled.div`
  height: 60px;
  margin-top: 15px;
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  position: relative;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  .input {
    left: 0;
    visibility: hidden;
    position: absolute;
  }
  .dropdownLabel {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px 0 20px;
  }
  .content {
    position: absolute;
    width: 100%;
    left: 0;
    transform: translateY(6px);
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    z-index: 1;
  }
  .caretIcon {
    transition: transform 250ms ease-out;
  }
  .input[value=""] + label {
    padding-left: 20px;
    color: var(--input-placeholder);
  }
  .input:checked + label > .caretIcon {
    transform: rotate(-180deg);
  }
  .content ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    padding: 2px 4px;
    margin: 0;
  }
  .content ul li {
    display: flex;
    align-items: center;
    width: cal(100% - 8px);
    height: 42px;
    margin: 2px 0;
    padding-left: 16px;
    border-radius: 6px;
  }
  .content ul li:hover {
    background-color: var(--selected-element);
  }
`;

interface scoreDropDownType {
  value: string;
  isOpen: boolean;
  setScoreNumber: any;
  setIsOpen: any;
}
// export const ScoreDropDown = ({value, setScoreNumber, setIsOpen, isOpen}: scoreDropDownType) => {
//   const ValueClick = () => {
//     setScoreNumber(value)
//     setIsOpen(!isOpen)
//   }
//   return(
//     <li onClick={ValueClick}>{value}</li>
//   )
// }

interface propsType {
  id: string;
  placeHolder: string;
  valueList: any;
  widthVal: string;
  isRequired: boolean;
}

const DropDown = ({id, valueList, placeHolder, widthVal, isRequired}: propsType) => {
  const {register, setValue, watch} = useContext<any>(RegisterComponentContext);
  // watch : 유저 객체에 저장된 value 가져오기 - "다음"버튼으로 컴포넌트 이동해도 이전 값 불러와서 유지

  const dropDownRef = useRef();
  const [dropDownValue, setDropDownValue] = useState(watch(id));
  //const valueList = ["1", "2", "3", "4"]

  // 배경 클릭 감지하여 드롭다운 창 닫기
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);

  const selectOnChange = (e: any) => {
    setIsOpen(!isOpen)
    //setValue(dropDownValue)
  }

  const valueOnClick = (value: any) => {
    setDropDownValue(value) // input value 업데이트
    setIsOpen(!isOpen)
    setValue(id, value) // 유저 폼 객체의 "id"항목에 value 저장
  }

  return(
    <DropDownBox ref={dropDownRef} style={{width: widthVal}}>
      <input id={id}
             type="checkbox"
             className="input"
             // onChange={() => {
             //   setValue(id, dropDownValue)
             //   setIsOpen(!isOpen)
             // }}
             checked={isOpen}
             value={dropDownValue}
             {...register(id, {
               onChange: selectOnChange
             })}/>
      <label className="dropdownLabel" htmlFor={id}>
        {dropDownValue==undefined &&
          <div>{placeHolder}</div>
        }
        <div>{dropDownValue}</div>
        <DownIc className="caretIcon"/>
      </label>
      {isOpen &&
        <div className="content">
          <ul>
            {valueList.map((value: any, index: any) => (
              // <ScoreDropDown key={index} value={value} setScoreNumber={setDropDownValue} setIsOpen={setIsOpen} isOpen={isOpen}/>
              <li key={index} onClick={(e) => valueOnClick(value)}>{value}</li>
            ))}
          </ul>
        </div>
      }
    </DropDownBox>
  );
};

export default DropDown;