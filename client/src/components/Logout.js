import React, { useState } from "react";

const Logout = ({ loginHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const onClickLogoutBtn = () => {
    loginHandler();
  };
  return (
    <div className="Logout-container">
      <button onClick={openModalHandler}>Logout</button>
      {isOpen ? (
        <div className="Logout-backdrop" onClick={openModalHandler}>
          <div
            className="Logout-view"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h1>정말 로그아웃할꺼여?</h1>
            <div className="Logout-view-buttons">
              <button>cancel</button>
              <button onClick={onClickLogoutBtn}>Logout</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Logout;
