import React from "react";

const Desc = () => {
  // 탭메뉴의 상태가 detail(상세정보)이면 특정 행사정보 렌더링
  //             review면 review 컴포넌트 렌더링

  return (
    <div className="Desc">
      {/* {tabStatus === 'info' ? <Info /> : <Review />} // info 면 상세정보, review면 리뷰정보  */}
      <ul>
        <li>Overview</li>
        <li>Period</li>
        <li>Location</li>
        <li>Tel</li>
        <li>URL</li>
      </ul>
    </div>
  );
};

export default Desc;
