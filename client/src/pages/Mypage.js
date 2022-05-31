import React, { useState } from "react";

const Mypage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="Mypage-container">
      <button onClick={openModalHandler}>Mypage</button>
      {isOpen ? (
        <div className="Mypage-backdrop" onClick={openModalHandler}>
          <div
            className="Mypage-view"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h1>Mypage component</h1>
            <div className="Mypage-view-inputs">
              <input placeholder="바꿀닉네임"></input>
            </div>
            <div className="Mypage-view-buttons">
              <button>취소</button>
              <button>수정하기</button>
              <button>회원탈퇴</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Mypage;
