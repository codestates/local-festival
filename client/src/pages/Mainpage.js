import React, { useEffect, useState } from "react";
import FestivalList from "../components/FestivalList";
import Hashtag from "../components/Hashtag";
import Search from "../components/Search";
import axios from "axios";
const Mainpage = () => {
  const dummyData = [
    {
      id: 1,
      content_id: 2747639,
      title: "강아지숲 도그페스타(DOG FESTA) 2021",
      image:
        "http://tong.visitkorea.or.kr/cms/resource/37/2747637_image2_1.jpg",
      start_date: "20211002",
      end_date: "20211003",
      location: "강원도 춘천시 남산면 충효로 437",
      tel: "033-913-1400",
      overview:
        "'강아지숲 도그페스타 2021'은 반려견과 함께할 수 있는 다채로운 참여형 프로그램을 통해 사람과 반려견이 행복하게 공존할 수 있는 방향을 모색하고자 하는 행사다. 행사는 강아지숲 테마파크 입장객 누구나 참여가 가능하다. 강아지숲은 이번 행사를 통해 ‘아름다운 공존을 위한 선택’이라는 주제의 설채현 수의사 특강과 도그스포츠 시범, 플리마켓 등 다양한 프로그램 뿐만 아니라 동물등록 캠페인 등 의미있는 이벤트를 열어 선진 반려문화 정착에 앞장설 계획이다. 또 미니 운동회, 노즈워크 챌린지 등 반려견과 함께 호흡을 맞춰보는 이색적인 프로그램을 통해 향후 대한민국 반려문화를 대표하는 행사로 자리매김하는 게 목표다.",
      url: '<a href="http://www.dforest.co.kr" target="_blank" title="새창 : 관광지">http://www.dforest.co.kr</a>',
    },
    {
      id: 2,
      content_id: 2759260,
      title: "강동청년축제",
      image:
        "http://tong.visitkorea.or.kr/cms/resource/57/2759257_image2_1.png",
      start_date: "20211030",
      end_date: "20211106",
      location: "undefined",
      tel: "02-482-7647",
      overview:
        '2021 강동청년축제는 청년들을 위한, 청년들에 의한, 청년들의 축제이다.<br>강동 청년 기획단이 함께 운영하고, 오늘을 살아가며 위기를 기회로 바꾸는 청년들의 이야기를 담아 청년 아티스트들의 다양한 공연들로 관객들에게 위로와 감동 그리고 청년들의 이야기를 전달한다.<br>2021 강동청년축제는 모바일 페이지와 강동오랑 유튜브 채널을 통해 진행되며 누구나 쉽고 재미있게 축제를 즐길 수 있다.<br>"위기를 기회로, WE GOT CHANCE"가 2021 강동청년축제의 슬로건이다.',
      url: "undefined",
    },
    {
      id: 3,
      content_id: 910544,
      title: "가평씽씽송어축제 2021",
      image:
        "http://tong.visitkorea.or.kr/cms/resource/48/2560348_image2_1.jpg",
      start_date: "20220101",
      end_date: "20220220",
      location: "경기도 가평군 가평읍 가평제방길 119",
      tel: "031-581-6423",
      overview: "가평천 일대에서 진행되는 송어 얼음낚시 및 먹거리 식당",
      url: '<a href="http://www.가평씽씽송어축제.com" target="_blank" title="새창: 씽씽겨울축제 홈페이지로 이동">http://www.가평씽씽송어축제.com</a>',
    },
    {
      id: 4,
      content_id: 2628962,
      title: "강릉국제영화제(GIFF)",
      image:
        "http://tong.visitkorea.or.kr/cms/resource/32/2760232_image2_1.jpg",
      start_date: "20211022",
      end_date: "20211031",
      location: "강원도 강릉시 경강로2021번길 9-1",
      tel: "033-641-8079",
      overview:
        "강릉시의 시조(市鳥) 고니는 여름에는 중앙아시아에서 머물다가 11월이 되면 우리나라를 찾아오는 겨울 철새로 오는 11월, 처음으로 전 세계 곳곳의 영화들을 강릉 시민과 영화 관객들에게 드디어 선보이는 강릉국제영화제를 의미한다. 고니가 떠난 자리에 등장하는 과거의 여인은 역사적으로 문학과 미술에 큰 발자취를 남긴 강릉 출신의 두 작가 신사임당과 허난설헌을 표현한 것이다. 과거의 위대한 작가가 보낸 강릉에 담긴 다양한 이야기들을 스크린을 통해 오늘날의 관객과 만나길 바라는 강릉국제영화제의 목표를 따뜻하고 감성적인 분위기로 표현해냈다.",
      url: '<a href="http://www.giff.kr/kor/" target="_blank" title="새창: 행사 홈페이지로 이동">http://www.giff.kr/kor</a>',
    },
    {
      id: 5,
      content_id: 2713558,
      title: "강원세계산림엑스포",
      image:
        "http://tong.visitkorea.or.kr/cms/resource/24/2804924_image2_1.jpg",
      start_date: "20230504",
      end_date: "20230606",
      location: "강원도 고성군 토성면 잼버리로 244",
      tel: "033-818-2158",
      overview:
        '2023 강원세계산림엑스포는 오는 2023년 5월 4일부터 6월 6일까지 34일 동안 "세계, 인류의 미래, 산림에서 찾는다"라는 주제로 고성군 토성면에 위치한 세계잼버리수련장과 설악~금강권을 연결하는 고성, 속초, 인제, 양양 일원에서 개최된다.',
      url: '<a href="http://www.gwfe.or.kr" target="_blank" title="새창: 홈페이지로 이동">http://www.gwfe.or.kr</a>',
    },
    {
      id: 6,
      content_id: 2709958,
      title: "가산수피아 '봄의 정원'",
      image:
        "http://tong.visitkorea.or.kr/cms/resource/89/2713489_image2_1.jpg",
      start_date: "20210320",
      end_date: "20210630",
      location: "경상북도 칠곡군 가산면 학하들안2길 105",
      tel: "054-971-9861",
      overview:
        "사계절 내내 아름다운 자연이 가득한 숲과 정원 가산수피아!!\n설레는 봄, 봄꽃 향기 가득한 정원과 레일썰매, 수피아미술관, 배틀그라운드 등  감성지수를 높이고 스트레스를 낮출 체험이 이 곳엔 가득하다.\n3월 중순부터 4월 중순까지 한달간 진행되는 '봄의 정원'은 벚꽃, 꽃잔디, 연산홍, 목련 등 다양한 꽃들의 향기가 봄을 전하고,  공룡뜰, 벚꽃길, 천년솔숲 황토길, 이끼정원, 테마정원 등 잊고 살던 감성의 소리를 색, 향, 촉감으로 만끽할 수 있는 시간이 될 것이다.",
      url: '<a href="http://gasansupia.com" target="_blank" title="새창: 홈페이지로 이동">http://gasansupia.com</a>',
    },
    {
      id: 7,
      content_id: 506378,
      title: "강진청자축제",
      image:
        "http://tong.visitkorea.or.kr/cms/resource/16/2689916_image2_1.png",
      start_date: "20211001",
      end_date: "20211007",
      location: "온라인 개최",
      tel: "061-430-3352",
      overview:
        "[축제소개] 흙, 불 그리고 사람의 혼이 결합해 탄생한 강진청자\n신비한 빛깔과 아름다운 무늬가 특징인 고려청자는 한국을 대표하는 도자예술품이다. 약 500년 간 청자문화를 꽃피웠던 청자의 고장 강진에서 고려청자와 도자예술을 제주로 한 강진청자축제가 열린다. 화목가마 불 지피기부터 물레 성형하기, 청자 상감하기, 청자 조각하기 등 직접 청자를 제작하는 과정을 체험해볼 수 있다. 체험을 하는 과정에서 강진청자의 아름다움과 섬세함, 그리고 뛰어난 가치에 대해 느껴볼 수 있다. <br><br>[축제TIP] 고려청자란?<br>고려청자는 한국문화예술사에서 가장 자랑할만한 것 중의 하나라고 할 수 있는 우리나라의 대표적인 도자예술품으로 비색상감무늬는 기술과 아름다움의 극치로 표현되고 있으며 인공을 떠난 천공의 경지라는 찬사를 받고 있다.",
      url: '<a href="http://www.gangjin.go.kr/culture/festival/" target="_blank" title="새창:강진 청자축제 홈페이지로 이동">http://www.gangjin.go.kr</a>',
    },
    {
      id: 8,
      content_id: 2733528,
      title: "《MMCA 이건희컬렉션 특별전: 한국미술명작》",
      image:
        "http://tong.visitkorea.or.kr/cms/resource/27/2733527_image2_1.jpg",
      start_date: "20210721",
      end_date: "20220313",
      location: "서울특별시 종로구 삼청로 30",
      tel: "02-3701-9500",
      overview:
        "《MMCA 이건희컬렉션 특별전: 한국미술명작》은 고(故) 이건희 회장 기증’ 한국 근‧현대미술 대표작들을 처음 공개하는 전시로, 수준 높은 예술작품을 국민과 함께 향유하고자 한 기증자의 뜻을 기리고자 마련됐다. 이번 전시에서는 한국인이 사랑하는 작가 김환기, 박수근, 이중섭, 이응노, 유영국, 권진규, 천경자 등 34명의 주요작품 58점을 먼저 선보인다. 1920년대부터 1970년대까지 제작된 작품들을 주축으로 크게 수용과 변화, 개성의 발현, 정착과 모색 세 개의 주제로 나누었다.",
      url: '<a href="http://www.mmca.go.kr/exhibitions/exhibitionsDetail.do?exhId=202107060001450" target="_blank" title="새창 : 관광지">www.mmca.go.kr</a>',
    },
    {
      id: 9,
      content_id: 1806376,
      title: "강동북페스티벌",
      image:
        "http://tong.visitkorea.or.kr/cms/resource/77/2751077_image2_1.jpg",
      start_date: "20211012",
      end_date: "20211016",
      location: "온라인 개최",
      tel: "강일 427-4004, 성내 471-0044, 해공 478-9656, 암사 429-0476, 천호 488-7223, 둔촌 489-6557",
      overview:
        "<2021 강동북페스티벌>은 강동문화재단이 주관하고 구립도서관(성내, 암사, 해공, 강일, 천호, 둔촌)이 기획, 진행하는 북페스티벌이다.<br>시·공간의 제약 없이 책을 통해 동심을 느끼고, 공감하는 마음을 되찾길 바라며, 아이의 마음과 공감의 의미를 담은 '돌아가자 동심(童心), 함께하자 동심(同心), 녹여보자 동심(冬心)'을 주제로 강동구 내 도서관이 모여 2021년 강동북페스티벌을 개최한다.",
      url: '홈페이지-<a href="http://glibf.or.kr" target="_blank" title="새창: 홈페이지로 이동">http://glibf.or.kr</a><br>네이버TV-<a href="https://tv.naver.com/v/22597430" target="_blank" title="새창 : 관광지">tv.naver.com</a>',
    },
    {
      id: 10,
      content_id: 2746930,
      title: "감악산 꽃&별 여행",
      image:
        "http://tong.visitkorea.or.kr/cms/resource/26/2746926_image2_1.JPG",
      start_date: "20210924",
      end_date: "20211017",
      location: "거창군 신원면 덕산리 산 57",
      tel: "055-940-3390",
      overview:
        "감악산 꽃&별 여행축제는 낮에는 가을의 꽃의 전경을, 밤에는 별빛을 보며 방문객에게 가을의 감동과 추억을 선물한다.<br>낮에는 만개한 국화 사이에서 인생샷을 건지고, 푸드트럭에서 먹거리와 함께 디제잉콘서트, 음악회, 버스킹 등 공연도 즐기고, 밤에는 감악산 전망대에서 미디어파사드 관람을 하며 보고 듣고 맛보고 오감이 즐거운 추억을 만들어 가길 바란다.",
      url: "undefined",
    },
    {
      id: 11,
      content_id: 2496162,
      title: "강원그린박람회",
      image:
        "http://tong.visitkorea.or.kr/cms/resource/58/2496158_image2_1.jpg",
      start_date: "20210806",
      end_date: "20210808",
      location: "강원도 춘천시 평화로 26",
      tel: "033-260-9320",
      overview:
        "강원그린박람회는 강원도의 미래를 이끌어 갈 환경, 에너지, 녹색, 바이오, 의료 등 대한민국 국민들에게 최신 산업 제품들을 선보이고 판매하며 청소년들에게는 체험의 장을 마련하는 등 강원도 대표 산업 축제로 자리매김하며 나아가 대한민국을 대표하는 박람회로 성장하고 있다.<br><br>특히, 춘천닭갈비막국수축제 인파와 함께하는 2019 강원그린박람회는 참가기업들을 위해 민,관의 긴밀한 협력, 다양한 매체를 활용한 종합 홍보에 나설 예정이다. 또한 그린동물원, 그린펫마켓 등 친환경 반려동물 산업과 강원도 춘천지역내 경력단절 여성을 위한‘경력단절여성 페스티벌’동시 개최 등으로 다양한 분야의 관람객들이 방문할 예정이다.",
      url: "undefined",
    },
    {
      id: 12,
      content_id: 2819403,
      title: "강남인테리어디자인위크",
      image:
        "http://tong.visitkorea.or.kr/cms/resource/96/2819396_image2_1.jpg",
      start_date: "20220826",
      end_date: "20220904",
      location: "서울특별시 강남구 논현동",
      tel: "02-3423-5532",
      overview:
        "o  목적 :  강남의 수준높은 거리 인프라를 활용한 민관협업의  맞춤형 테마축제 일환으로  논현동 가구거리내 국내대표 인테리어 디자인路 관광특구 조성을 통한 국내·외 관광객 유치 및 지역상권 활성화를 위해 개최<br>o  연혁 :  2020.11.20(금)∼10.28(토)(9일간)최초 개최이후 매년 개최되는 행사로 2021년에는 5.28(금)∼6.5.(토) (10일간) 제 2회 행사 개최<br>o  장소 :  논현동 가구거리 일대 (논현역∼학동역)",
      url: '<a href="https://week.indko.co.kr/" target="_blank" title="새창 : 강남인테리어디자인위크">https://week.indko.co.kr/</a>',
    },
    {
      id: 13,
      content_id: 1307813,
      title: "강동선사문화축제",
      image:
        "http://tong.visitkorea.or.kr/cms/resource/97/2751097_image2_1.jpg",
      start_date: "20211008",
      end_date: "20211010",
      location: "서울특별시 강동구 성내로 25",
      tel: "02-3425-8530",
      overview:
        "1996년 첫 문을 연 강동선사문화축제는 서울 축제 중 유일하게 선사시대를 테마로 열리는 축제로, 뚜렷한 역사성과 정체성을 자랑한다.<br>장기화된 코로나19로 지친 구민들에게 희망의 메시지를 전하고 즐거운 추억을 선사하는 비대면 방식의 제26회 강동선사문화축제가 펼쳐진다. 모든 프로그램은 온라인 콘텐츠로 기획되어 안전하게 축제의 재미를 선사하고 위로와 희망의 메세지를 전달한다.",
      url: '<a href="http://www.gangdongsunsa.com/" target="_blank" title="새창:강동선사문화축제 안내 페이지로 이동">www.gangdongsunsa.com</a>',
    },
    {
      id: 14,
      content_id: 2704330,
      title: "가족끼리 빙어체험 2021",
      image:
        "http://tong.visitkorea.or.kr/cms/resource/26/2704326_image2_1.JPG",
      start_date: "20210116",
      end_date: "20211231",
      location: "경기도 양평군 단월면 곱다니길 55-2 수미마을 방문객센터",
      tel: "031-775-5205",
      overview:
        "수미마을은 맑은 물로 대한민국에서 손꼽히는 양평에서 365일 사계절 다양한 주제로 가족끼리 함께 당일 캠핑과 소풍을 즐기면서 체험활동을 하는 곳이다. \n봄(송어딸기캠피닉), 여름(메기수염캠피닉), 가을(몽땅구이캠피닉), 겨울(빙어체험 캠피닉)가 진행된다.\n가족끼리 캠피닉을 통해 더 많은 추억을 남기시길 바란다.",
      url: '<a href="https://soomyland.com/reserve/sub01.php" target="_blank" title="새창: 홈페이지로 이동">https://soomyland.com/reserve/sub01.php</a>',
    },
    {
      id: 15,
      content_id: 1774420,
      title: "강화도 산천어 송어빙어 축제",
      image: "undefined",
      start_date: "20220115",
      end_date: "20220327",
      location: "인천광역시 강화군 양도면 중앙로787번길 8-2",
      tel: "010-7617-6606",
      overview:
        "은백의 겨울 이곳 왕방마을 인산낚시터에서 제8회 강화도 산천어 송어.빙어축제를 [ 2022.01.15 ~ 2022.03.01 ]에 개최하게 되었다. 주변의 수려한 경관과 산책로, 얼음썰매 등 여러 즐길거리와 이벤트를 준비했다. 또한 낚시 체험과 더불어 송어회, 송어구이, 송어튀김, 빙어튀김 등 겨울철 별미로 축제장을 찾아주신 여러분들의 먹거리를 풍성하게 준비하였다. 누구나 쉽고 즐겁게 즐기실 수 있는 축제가 되도록 항상 노력하는 강화도 송어.빙어축제가 되겠다.",
      url: '<a href="http://www.insanry.com/" target="_blank" title="새창:강화도 송어축제 홈페이지로 이동">http://www.insanry.com</a>',
    },
    {
      id: 16,
      content_id: 2735376,
      title: "거리예술 캬라반 ‘봄’",
      image:
        "http://tong.visitkorea.or.kr/cms/resource/90/2816490_image2_1.jpg",
      start_date: "20220423",
      end_date: "20220522",
      location: "서울특별시 중구 을지로 281",
      tel: "02-3437-0059",
      overview:
        "2014년 '거리예술 시즌제'로 시작된 거리예술 캬라반은 도심 속 시민 일상 공간인 광장, 공원 등을 찾아가 거리예술 작품을 선보이는 서울문화재단 서울거리예술창작센터의 프로그램이다. 오는 23일부터 5월 22일까지 매주말마다 동대문디자인플라자(DDP), 서울숲, 노원 불빛정원, 평화문화진지, 선유도공원 등 5개 거점에서 오브제극·무용·서커스·음악극 등 총 12편의 거리공연이 48회 이어진다.<br><br>[행사일정]<br>동대문DDP(04.23.~04.24.)<br>서울숲(04.30.~05.01.)<br>노원 불빛정원(05.07.~05.08.)<br>평화문화진지(05.14.~05.15.)<br>선유도공원(05.21.~-5.22.)",
      url: '홈페이지 : <a href="https://www.sfac.or.kr/artspace/artspace/streetArts_notice.do?cbIdx=984&bcIdx=131023" target="_blank" title="새창 : 거리예술 캬라반 ‘봄’">https://www.sfac.or.kr</a><br>SNS : <a href="https://www.facebook.com/SeoulStreetArtsCreationCenter/" target="_blank" title="새창 : 거리예술 캬라반 ‘봄’">https://www.facebook.com</a>',
    },
    {
      id: 17,
      content_id: 2643189,
      title: "강화 빙어축제",
      image:
        "http://tong.visitkorea.or.kr/cms/resource/84/2643184_image2_1.jpg",
      start_date: "20211224",
      end_date: "20220220",
      location: "인천광역시 강화군 송해면 전망대로423번길 161",
      tel: "032-933-3266",
      overview:
        "아이들과 즐거운 추억을 남기기위해 겨울철만 할수있는 문화체험이다.",
      url: '<a href="http://www.yango.co.kr" target="_blank" title="새창 : 강화 빙어축제">http://www.yango.co.kr</a>',
    },
    {
      id: 18,
      content_id: 2039499,
      title: "경기건축문화제",
      image:
        "http://tong.visitkorea.or.kr/cms/resource/96/2766896_image2_1.jpg",
      start_date: "20211022",
      end_date: "20211031",
      location: "경기도 파주시 회동길 145",
      tel: "031-269-6131",
      overview: "파주시와 함께하는 2021경기건축문화제",
      url: '<a href="http://www.gaf.or.kr" target="_blank" title="새창 : 경기건축문화제 홈페이지로 이동">http://www.gaf.or.kr</a>',
    },
    {
      id: 19,
      content_id: 2490376,
      title: "겸재문화예술제",
      image:
        "http://tong.visitkorea.or.kr/cms/resource/45/2819745_image2_1.jpg",
      start_date: "20220611",
      end_date: "20220611",
      location: "서울특별시 강서구 양천로47길 36",
      tel: "02-2659-2206",
      overview:
        "겸재정선미술관에서 개관 13주년을 맞이하여 제 6회 겸재문화예술제를 개최하고 그 일환으로 제 17회 겸재전국사생대회를 진행한다.",
      url: '<a href="http://gjjs.or.kr/?WS=610" target="_blank" title="새창: 겸재문화예술제 홈페이지로 이동">http://gjjs.or.kr</a>',
    },
    {
      id: 20,
      content_id: 1250585,
      title: "경기세계도자비엔날레",
      image:
        "http://tong.visitkorea.or.kr/cms/resource/00/2606300_image2_1.jpg",
      start_date: "20211001",
      end_date: "20211128",
      location: "경기도 이천시 경충대로2697번길 263",
      tel: "031-645-0542",
      overview:
        "올해로 11회차를 맞이하는 2021경기세계도자비엔날레는 ‘다시_쓰다 Re: Start’라는 주제로 비엔날레의 과거와 ‘포스트 코로나’ 이후 도자의 역할과 의미를 짚어보고 예술적 치유와 희망의 메시지를 전달하고자 한다.<br>70개국 1,184명의 작가가 참가한 경기세계도자비엔날레의 대표 전시인 국제공모전은 한국도자재단이 지난 8월 최종 수상작 6점을 공개한 바 있으며 28개국의 작가 69명의 작품 76점이 전시된다.<br>이천 경기도자미술관에서는 국제공모전 이외에도 한국ㆍ네덜란드 수교 60주년을 기념하여 네덜란드 현대 도예의 오늘을 조망하는 국가초청전과 2019년 비엔날레 공모전 대상작가 팁 톨랜드의 초대전이 마련됐다. 광주 경기도자박물관에서는 청화백자 관련 특별전이 온라인전시와 함께 열릴 예정이다. 여주 경기생활도자미술관은 경기도자온라인페어와 연계한 특별전과 함께 가족단위 관람객을 위한 어린이 전시가 준비됐다.",
      url: '<a href="https://kicb.or.kr/" target="_blank" title="새창 : 경기세계도자비엔날레">https://kicb.or.kr/</a>',
    },
  ];
  const [festivalData, setFestivalData] = useState(null);
  const [condition, setCondition] = useState("");

  //* 두번 클릭해야지 작동
  const onSearch = (searchText) => {
    console.log(searchText);
    setCondition(searchText);
    const filteredFestival = festivalData.filter(
      (festival) =>
        festival.location.includes(condition) ||
        festival.title.includes(condition)
    );
    setFestivalData(filteredFestival);

    // }
  };

  //* 서버랑 연결할 때
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.SERVER_ADDRESS}/festivals`
        );

        if (response) {
          setFestivalData(response);
        } else {
          console.log("no fetch data & use dummyData");
          setFestivalData(dummyData);
        }
        // setFestivalData(dummyData);
      } catch (error) {
        console.log(error);
        setFestivalData(dummyData);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {}, [condition]);

  //* 데이터 한번 받아온 후, client에서 자체적으로 필터링

  // useEffect(() => {
  //   setFestivalData(dummyData);
  // }, [condition]);

  return (
    <div className="Mainpage">
      <Search onSearch={onSearch} />
      <FestivalList festivals={festivalData} />
      <Hashtag />
    </div>
  );
};

export default Mainpage;
