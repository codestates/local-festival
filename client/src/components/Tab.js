import React from "react";

const Tab = () => {
  // 기본이 상세정보로 렌더링
  // 리뷰 탭 눌렀을 때 리뷰 컴포넌트 렌더링

  // 탭메뉴의 상태가 detail(상세정보)이면 특정 행사정보 렌더링
  // review면 review 컴포넌트 렌더링

  // 상태 : info , review

  return (
    <div className="Tab">
      {/* // onClick 클릭한 텍스트 컨텐츠 상태 끌어올리기 */}
      <div>상세정보</div>
      <div>리뷰</div>
    </div>
  );
};

export default Tab;
