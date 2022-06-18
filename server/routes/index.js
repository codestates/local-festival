const express = require("express");
const router = express.Router();

const festivalRouter = require("./festivals");
router.use("/festivals", festivalRouter);

const usersRouter = require("./users");
router.use("/users", usersRouter);


//#Pick CRUD

//* 유저가 축제를 찜하기 했을 때 (C)
router.post('/pick', (req, res) => {
  // console.log(req.body); { user_id: 1, festival_id: 24 }
  console.log("addpick",req.body);
res.send("good")
  // 받아온 user_id와 festival_id로 데이터 저장해주세욥

})

//* 유저별로 찜한 축제 불러오기 (R)
//! params로 받아오는건 숫자가 문자열로 받아와지는 것 같음

//*회원 탈퇴 라우터
// router.delete('/users', (req, res) => {
//   //토큰 유효성검사후 db에 저장된 user비밀번호가 맞는지 확인한 후에 비밀번호가 일치하면 db에서 회원정보 삭제해주시고 ok 메시지 보내주세요
//   console.log(req.headers.accesstoken); //token
//   console.log(req.body); //{ user_id: 1, passwordCheck: 'aa' }
//   res.json({message:"ok"})
// })

router.get('/pick/:user_id', (req, res) => {
  const user_id = req.params
  console.log('get picked festival',user_id); //{ user_id: '1' }
  const dummydata = [{festival_id : 3},{festival_id : 4}]
  res.json({data : dummydata})
})


//* 유저가 찜한 축제를 해제했을 때 (D)
router.delete('/pick', (req, res) => {
  console.log(req.headers.accesstoken); // 'token',
  //토큰 유효성 검사후 유저가 픽한정보 DB에서 지우기
  console.log('deletepick',req.body); //delete { user_id: 1, festival_id: 11 }
  // db에 삭제 처리 해주세욥
  res.send("good")
})





//#Review CRUD

//* 특정 축제의 리뷰글 작성하기 (C)
router.post('/review', (req, res)=>{
  console.log(req.body);
  // {
  //   data: { content: '6번축제글 컨텐츠입니다', rating: 3, festival_id: 6 },
  //   headers: { accessToken: 'token' }
  // }
  res.json({message:"ok"})
})

//* 특정 축제의 리뷰글 불러오기 (R)
//! api문서 수정해야 합니다 => 전체 글 불러오는 걸로 되어있는데 특정 축재 리뷰글로 불러와야됩니다. 
router.get('/review/:festival_id', (req, res) => {
  console.log(req.params);
  // { festival_id: '4' } 특정 행사의 아이디가 string으로 들어옵니다 (주의)
  
  //잘 넘어오나 확인하기 위해 임의로 만든 dummydata입니다. 유저 닉네임도 가져오려면 조인테이블 필요합니다.
  //! dummydata 양식 수정했습니다
 const dummydata = [{id : 1,
  festival_id: 3,
  nickname : "유동혁",
  content :"'소록소록 로운 비나리 소록소록 다솜.',",
  rating: 3,
  createdAt: "2022-06-14T01:44:00.000Z",
  updatedAt:"2022-06-14T01:44:00.000Z"},
  {id : 2,
    festival_id: 3,
    nickname : "홍은지",
    content :"'소록소록 도서 바람꽃 안녕 여우비 아슬라 도서관 다솜 감또개 비나리 도르레 미쁘다 소록소록 아름드리 산들림 가온누리 곰다시 비나리 도르레 예그리나 나비잠 포도 아리아 나래 바람꽃 우리는 늘품 아슬라 곰다시 산들림 예그리나 달볓 포도 소록소록 도르레 노트북 소솜 가온누리 우리는 그루잠 달볓 컴퓨터 비나리 아름드리 아련 소록소록 로운 비나리 소록소록 다솜.',",
    rating: 3,
    createdAt: "2022-06-14T01:44:00.000Z",
    updatedAt:"2022-06-14T01:44:00.000Z"},
    {id : 3,
      festival_id: 3,
      nickname : "이동규",
      content :"'소록소록 도서 바람꽃 안녕 여우비 아슬라 도서관 다솜 감또개 비나리 도르레 미쁘다 소록소록 아름드리 산들림 가온누리 곰다시 비나리 도르레 예그리나 나비잠 포도 아리아 나래 바람꽃 우리는 늘품 아슬라 곰다시 산들림 예그리나 달볓 포도 소록소록 도르레 노트북 소솜 가온누리 우리는 그루잠 달볓 컴퓨터 비나리 아름드리 아련 소록소록 로운 비나리 소록소록 다솜.',",
      rating: 3,
      createdAt: "2022-06-14T01:44:00.000Z",
      updatedAt:"2022-06-14T01:44:00.000Z"},
      {id : 4,
        festival_id: 4,
        nickname : "이창석",
        content :"'소록소록 도서 바람꽃 안녕 여우비 아슬라 도서관 다솜 감또개 비나리 도르레 미쁘다 소록소록 아름드리 산들림 가온누리 곰다시 비나리 도르레 예그리나 나비잠 포도 아리아 나래 바람꽃 우리는 늘품 아슬라 곰다시 산들림 예그리나 달볓 포도 소록소록 도르레 노트북 소솜 가온누리 우리는 그루잠 달볓 컴퓨터 비나리 아름드리 아련 소록소록 로운 비나리 소록소록 다솜.',",
        rating: 3,
        createdAt: "2022-06-14T01:44:00.000Z",
        updatedAt:"2022-06-14T01:44:00.000Z"},
        {id : 5,
          festival_id: 3,
          nickname : "이동규",
          content :"'소록소록 도서 바람꽃 안녕 여우비 아슬라 도서관 다솜 감또개 비나리 도르레 미쁘다 소록소록 아름드리 산들림 가온누리 곰다시 비나리 도르레 예그리나 나비잠 포도 아리아 나래 바람꽃 우리는 늘품 아슬라 곰다시 산들림 예그리나 달볓 포도 소록소록 도르레 노트북 소솜 가온누리 우리는 그루잠 달볓 컴퓨터 비나리 아름드리 아련 소록소록 로운 비나리 소록소록 다솜.',",
          rating: 3,
          createdAt: "2022-06-14T01:44:00.000Z",
          updatedAt:"2022-06-14T01:44:00.000Z"},
          {id : 6,
            festival_id: 3,
            nickname : "이동규",
            content :"'소록소록 도서 바람꽃 안녕 여우비 아슬라 도서관 다솜 감또개 비나리 도르레 미쁘다 소록소록 아름드리 산들림 가온누리 곰다시 비나리 도르레 예그리나 나비잠 포도 아리아 나래 바람꽃 우리는 늘품 아슬라 곰다시 산들림 예그리나 달볓 포도 소록소록 도르레 노트북 소솜 가온누리 우리는 그루잠 달볓 컴퓨터 비나리 아름드리 아련 소록소록 로운 비나리 소록소록 다솜.',",
            rating: 3,
            createdAt: "2022-06-14T01:44:00.000Z",
            updatedAt:"2022-06-14T01:44:00.000Z"},
            {id : 7,
              festival_id: 3,
              nickname : "홍은지",
              content :"'소록소록 도서 바람꽃 안녕 여우비 아슬라 도서관 다솜 감또개 비나리 도르레 미쁘다 소록소록 아름드리 산들림 가온누리 곰다시 비나리 도르레 예그리나 나비잠 포도 아리아 나래 바람꽃 우리는 늘품 아슬라 곰다시 산들림 예그리나 달볓 포도 소록소록 도르레 노트북 소솜 가온누리 우리는 그루잠 달볓 컴퓨터 비나리 아름드리 아련 소록소록 로운 비나리 소록소록 다솜.',",
              rating: 3,
              createdAt: "2022-06-14T01:44:00.000Z",
              updatedAt:"2022-06-14T01:44:00.000Z"},
              {id : 8,
                festival_id: 3,
                nickname : "이동규",
                content :"'소록소록 도서 바람꽃 안녕 여우비 아슬라 도서관 다솜 감또개 비나리 도르레 미쁘다 소록소록 아름드리 산들림 가온누리 곰다시 비나리 도르레 예그리나 나비잠 포도 아리아 나래 바람꽃 우리는 늘품 아슬라 곰다시 산들림 예그리나 달볓 포도 소록소록 도르레 노트북 소솜 가온누리 우리는 그루잠 달볓 컴퓨터 비나리 아름드리 아련 소록소록 로운 비나리 소록소록 다솜.',",
                rating: 3,
                createdAt: "2022-06-14T01:44:00.000Z",
                updatedAt:"2022-06-14T01:44:00.000Z"},
                {id : 9,
                  festival_id: 3,
                  nickname : "유동혁",
                  content :"'소록소록 도서 바람꽃 안녕 여우비 아슬라 도서관 다솜 감또개 비나리 도르레 미쁘다 소록소록 아름드리 산들림 가온누리 곰다시 비나리 도르레 예그리나 나비잠 포도 아리아 나래 바람꽃 우리는 늘품 아슬라 곰다시 산들림 예그리나 달볓 포도 소록소록 도르레 노트북 소솜 가온누리 우리는 그루잠 달볓 컴퓨터 비나리 아름드리 아련 소록소록 로운 비나리 소록소록 다솜.',",
                  rating: 3,
                  createdAt: "2022-06-14T01:44:00.000Z",
                  updatedAt:"2022-06-14T01:44:00.000Z"}
]
  res.json(dummydata)
  
})

//* 특정 축제의 리뷰글 삭제하기 (D)

router.delete('/review/:id', (req, res) => {
  // id는 review table의 고유 id(pk) 입니다. api문서에 festival_id랑 user_id 요렇게 보내주기로 되어있는데
  // user_id는 토큰에 이미 담겨져서 오므로 토큰 검증으로 user_id를 얻을 수 있어 client에서 보내줄 필요가 없고, user_id랑 festival_id로 조인해서 찾는거보다 review table의 고유아이디를 프론트에서 백으로 바로 보내주어 백에서 더 간편하게 review table만 조회하여 삭제할 수 있습니다.
  console.log(req.params); // { id: '9' } string 주의!!
  console.log(req.headers.accesstoken); // 'token'
  //받아온 리뷰테이블 아이디랑 토큰으로 인가 후 디비에서 삭제 처리 해주세욥
  res.json({message : "ok"})
})


module.exports = router;
