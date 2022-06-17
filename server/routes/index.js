const express = require("express");
const router = express.Router();

const festivalRouter = require("./festivals");
// const usersRouter = require('./users');

router.use("/festivals", festivalRouter);
// router.use('/users', usersRouter);

//*회원 탈퇴 라우터
router.delete("/users", (req, res) => {
  //토큰 유효성검사후 db에 저장된 user비밀번호가 맞는지 확인한 후에 비밀번호가 일치하면 db에서 회원정보 삭제해주시고 ok 메시지 보내주세요
  console.log(req.headers.accesstoken); //token
  console.log(req.body); //{ user_id: 1, passwordCheck: 'aa' }
  res.json({ message: "ok" });
});

//* 회원가입 라우터
router.post("/users/signup", (req, res) => {
  console.log(req.body);
  //* DB저장 해주세욥
  res.send({ message: "ok" });
});

//* 로그인 라우터
router.post("/users/signin", (req, res) => {
  console.log(req.body);
  //아이디 검증해서 유효성 검사 후 토큰 만들어서 전송해 주세요
  //res.json({ token: accessToken, username: username, id: user.id });
  res.json({
    data: { token: "a", nickname: "(서버에서 보낸 유저 닉네임)", user_id: 1 },
    message: "ok",
  });
});

//* 클라이언트에서 유저아이디 받아오면 유저별로 찜한 축제 아이디 보내주기
//! params로 받아오는건 숫자가 문자열로 받아와지는 것 같음
router.get("/pick/:user_id", (req, res) => {
  const user_id = req.params;
  console.log("get picked festival", user_id); //{ user_id: '1' }
  const dummydata = [{ festival_id: 3 }, { festival_id: 4 }];
  res.json({ data: dummydata });
});

//* 유저가 축제를 찜하기 했을 때
router.post("/pick", (req, res) => {
  // console.log(req.body); { user_id: 1, festival_id: 24 }
  console.log("addpick", req.body);
  res.send("good");
  // 받아온 user_id와 festival_id로 데이터 저장해주세욥
});

//* 유저가 찜한 축제를 해제했을 때
router.delete("/pick", (req, res) => {
  console.log("deletepick", req.body); //delete { user_id: 1, festival_id: 11 }
  // db에 삭제 처리 해주세욥
  res.send("good");
});

//* 특정 축제의 리뷰글 불러오기
//! api문서 수정해야 합니다 => 전체 글 불러오는 걸로 되어있는데 특정 축재 리뷰글로 불러와야됩니다.
router.get("/review/:festival_id", (req, res) => {
  console.log(req.params);
  // { festival_id: '4' } 특정 행사의 아이디가 string으로 들어옵니다 (주의)

  //잘 넘어오나 확인하기 위해 임의로 만든 dummydata입니다. 유저 닉네임도 가져오려면 조인테이블 필요합니다.
  const dummydata = [
    {
      nickname: "Peachmong",
      content:
        "소록소록 도서 바람꽃 안녕 여우비 아슬라 도서관 다솜 감또개 비나리 도르레 미쁘다 소록소록 아름드리 산들림 가온누리 곰다시 비나리 도르레 예그리나 나비잠 포도 아리아 나래 바람꽃 우리는 늘품 아슬라 곰다시 산들림 예그리나 달볓 포도 소록소록 도르레 노트북 소솜 가온누리 우리는 그루잠 달볓 컴퓨터 비나리 아름드리 아련 소록소록 로운 비나리 소록소록 다솜.",
      rating: "333",
      created_at: new Date(),
    },
    {
      nickname: "Peachmong",
      content:
        "소록소록 도서 바람꽃 안녕 여우비 아슬라 도서관 다솜 감또개 비나리 도르레 미쁘다 소록소록 아름드리 산들림 가온누리 곰다시 비나리 도르레 예그리나 나비잠 포도 아리아 나래 바람꽃 우리는 늘품 아슬라 곰다시 산들림 예그리나 달볓 포도 소록소록 도르레 노트북 소솜 가온누리 우리는 그루잠 달볓 컴퓨터 비나리 아름드리 아련 소록소록 로운 비나리 소록소록 다솜.",
      rating: "333",
      created_at: new Date(),
    },
    {
      nickname: "Peachmong",
      content:
        "소록소록 도서 바람꽃 안녕 여우비 아슬라 도서관 다솜 감또개 비나리 도르레 미쁘다 소록소록 아름드리 산들림 가온누리 곰다시 비나리 도르레 예그리나 나비잠 포도 아리아 나래 바람꽃 우리는 늘품 아슬라 곰다시 산들림 예그리나 달볓 포도 소록소록 도르레 노트북 소솜 가온누리 우리는 그루잠 달볓 컴퓨터 비나리 아름드리 아련 소록소록 로운 비나리 소록소록 다솜.",
      rating: "333",
      created_at: new Date(),
    },
    {
      nickname: "Peachmong",
      content:
        "소록소록 도서 바람꽃 안녕 여우비 아슬라 도서관 다솜 감또개 비나리 도르레 미쁘다 소록소록 아름드리 산들림 가온누리 곰다시 비나리 도르레 예그리나 나비잠 포도 아리아 나래 바람꽃 우리는 늘품 아슬라 곰다시 산들림 예그리나 달볓 포도 소록소록 도르레 노트북 소솜 가온누리 우리는 그루잠 달볓 컴퓨터 비나리 아름드리 아련 소록소록 로운 비나리 소록소록 다솜.",
      rating: "333",
      created_at: new Date(),
    },
    {
      nickname: "Peachmong",
      content:
        "소록소록 도서 바람꽃 안녕 여우비 아슬라 도서관 다솜 감또개 비나리 도르레 미쁘다 소록소록 아름드리 산들림 가온누리 곰다시 비나리 도르레 예그리나 나비잠 포도 아리아 나래 바람꽃 우리는 늘품 아슬라 곰다시 산들림 예그리나 달볓 포도 소록소록 도르레 노트북 소솜 가온누리 우리는 그루잠 달볓 컴퓨터 비나리 아름드리 아련 소록소록 로운 비나리 소록소록 다솜.",
      rating: "333",
      created_at: new Date(),
    },
    {
      nickname: "Peachmong",
      content:
        "소록소록 도서 바람꽃 안녕 여우비 아슬라 도서관 다솜 감또개 비나리 도르레 미쁘다 소록소록 아름드리 산들림 가온누리 곰다시 비나리 도르레 예그리나 나비잠 포도 아리아 나래 바람꽃 우리는 늘품 아슬라 곰다시 산들림 예그리나 달볓 포도 소록소록 도르레 노트북 소솜 가온누리 우리는 그루잠 달볓 컴퓨터 비나리 아름드리 아련 소록소록 로운 비나리 소록소록 다솜.",
      rating: "333",
      created_at: new Date(),
    },
    {
      nickname: "Peachmong",
      content:
        "소록소록 도서 바람꽃 안녕 여우비 아슬라 도서관 다솜 감또개 비나리 도르레 미쁘다 소록소록 아름드리 산들림 가온누리 곰다시 비나리 도르레 예그리나 나비잠 포도 아리아 나래 바람꽃 우리는 늘품 아슬라 곰다시 산들림 예그리나 달볓 포도 소록소록 도르레 노트북 소솜 가온누리 우리는 그루잠 달볓 컴퓨터 비나리 아름드리 아련 소록소록 로운 비나리 소록소록 다솜.",
      rating: "333",
      created_at: new Date(),
    },
    {
      nickname: "Peachmong",
      content:
        "소록소록 도서 바람꽃 안녕 여우비 아슬라 도서관 다솜 감또개 비나리 도르레 미쁘다 소록소록 아름드리 산들림 가온누리 곰다시 비나리 도르레 예그리나 나비잠 포도 아리아 나래 바람꽃 우리는 늘품 아슬라 곰다시 산들림 예그리나 달볓 포도 소록소록 도르레 노트북 소솜 가온누리 우리는 그루잠 달볓 컴퓨터 비나리 아름드리 아련 소록소록 로운 비나리 소록소록 다솜.",
      rating: "333",
      created_at: new Date(),
    },
    {
      nickname: "Peachmong",
      content:
        "소록소록 도서 바람꽃 안녕 여우비 아슬라 도서관 다솜 감또개 비나리 도르레 미쁘다 소록소록 아름드리 산들림 가온누리 곰다시 비나리 도르레 예그리나 나비잠 포도 아리아 나래 바람꽃 우리는 늘품 아슬라 곰다시 산들림 예그리나 달볓 포도 소록소록 도르레 노트북 소솜 가온누리 우리는 그루잠 달볓 컴퓨터 비나리 아름드리 아련 소록소록 로운 비나리 소록소록 다솜.",
      rating: "333",
      created_at: new Date(),
    },
  ];
  res.json(dummydata);
});
module.exports = router;
