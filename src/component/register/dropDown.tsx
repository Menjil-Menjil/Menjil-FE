import styled from "@emotion/styled";
import Image from "next/image";
import downIc from "@/img/ic_dropdown.svg"
import {useEffect, useRef, useState} from "react";

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
  .input[value=""] + label{
    padding-left: 20px;
    color: #AFAFAF;
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

export const useDetectClose = (ref, initialState) => {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isOpen, ref]);
  return [isOpen, setIsOpen];
}

export const ScoreDropDown = ({ value, setScoreNumber, setIsOpen, isOpen}) => {
  const ValueClick = () => {
    setScoreNumber(value)
    setIsOpen(!isOpen)
  }
  return(
    <li onClick={ValueClick}>{value}</li>
  )
}

interface propsType {
  id: string;
  placeHolder: string;
  valueList: any;
  widthVal: string;
}

const DropDown = ({id, valueList, placeHolder, widthVal}: propsType) => {
  const dropDownRef = useRef();
  const [dropDownValue, setDropDownValue] = useState("");
  //const valueList = ["1", "2", "3", "4"]

  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);

  return(
    <DropDownBox ref={dropDownRef} style={{width: widthVal}}>
      <input id={id} type="checkbox"
             className="input"
             onChange={() => setIsOpen(!isOpen)}
             checked={isOpen} value={dropDownValue}/>
      <label className="dropdownLabel" htmlFor={id}>
        {dropDownValue=="" &&
          <div>{placeHolder}</div>
        }
        <div>{dropDownValue}</div>
        <Image src={downIc} alt="down" className="caretIcon"/>
      </label>
      {isOpen &&
        <div className="content">
          <ul>
            {valueList.map((value, index) => (
              <ScoreDropDown key={index} value={value} setScoreNumber={setDropDownValue} setIsOpen={setIsOpen} isOpen={isOpen}/>
            ))}
          </ul>
        </div>
      }
    </DropDownBox>
  );
};

export default DropDown;