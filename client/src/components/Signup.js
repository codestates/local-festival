import React, { useState } from "react";

const Signup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="Signup-container">
      <button onClick={openModalHandler}>Sign up</button>
      {isOpen ? (
        <div className="Signup-backdrop" onClick={openModalHandler}>
          <div
            className="Signup-view"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h1>Signup Component</h1>
            <div className="Signup-view-inputs">
              <input placeholder="ID"></input>
              <input placeholder="Nickname"></input>
              <input placeholder="Password"></input>
              <input placeholder="Password-check"></input>
            </div>
            <div className="Signup-view-buttons">
              <button>create account</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Signup;
