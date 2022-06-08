import React from "react";
import { useState } from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  position: relative;
  margin-top: 1rem;
  margin-left: 1em;
  cursor: pointer;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    /* background-color: #8b8b8b; */
    background: linear-gradient(to left, #8b8b8b 50%, pink 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: 1s;
    &.toggle--checked {
      background-position: left bottom;
    }
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #ffffff;
    transition-duration: 0.9s;
    &.toggle--checked {
      left: 27px;
    }
  }
`;

const Desc = styled.div`
  /* text-align: center; */
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;

export const Toggle = () => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn);
  };

  return (
    <>
      <ToggleContainer onClick={toggleHandler}>
        <div className={`toggle-container ${isOn ? "toggle--checked" : ""}`} />
        <div className={`toggle-circle ${isOn ? "toggle--checked" : ""}`} />
      </ToggleContainer>
      <Desc>
        <div>{isOn ? "찜완료!" : "찜하기"}</div>
      </Desc>
    </>
  );
};

/* const Toggle = (props) => {
  const { isChecked, handleToggle } = props;

  return (
    <div className="switch">
      <input
        type="checkbox"
        className={`switch-checkbox`}
        checked={isChecked}
        onChange={handleToggle}
        id={`switch-input`}
      />
      <label className="{`switch-label`}" htmlFor={`switch-input`}>
        <div className="ball" />
      </label>
    </div>
  );
}; */

export default Toggle;
