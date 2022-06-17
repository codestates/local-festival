const express = require('express');
const router = express.Router();

const festivalRouter = require('./festivals');
// const usersRouter = require('./users');

router.use('/festivals', festivalRouter);
// router.use('/users', usersRouter);

const usersRouter = require('./users');
router.use('/users', usersRouter);

//* 로그인 라우터

// router.post('/users/signin', (req, res) => {
//   console.log(req.body);
// //아이디 검증해서 유효성 검사 후 토큰 만들어서 전송해 주세요
// //res.json({ token: accessToken, username: username, id: user.id });
//   res.json({data : {token : "a", nickname : "(서버에서 보낸 유저 닉네임)", user_id:1},message : "ok"})
// })

//* 클라이언트에서 유저아이디 받아오면 유저별로 찜한 축제 아이디 보내주기 
//! params로 받아오는건 숫자가 문자열로 받아와지는 것 같음
router.get('/pick/:user_id', (req, res) => {
  const user_id = req.params
  // console.log(user_id); { user_id: '1' }
  const dummydata = [{festival_id : 3},{festival_id : 4}]
  res.json({data : dummydata})
})

//* 유저가 축제를 찜하기 했을 때
router.post('/pick', (req, res) => {
  // console.log(req.body); { user_id: 1, festival_id: 24 }
  console.log(req.body);
res.send("good")
  // 받아온 user_id와 festival_id로 데이터 저장해주세욥

})


// //* 특정 축제의 리뷰글 불러오기 
// //! api문서 수정해야 합니다 => 전체 글 불러오는 걸로 되어있는데 특정 축재 리뷰글로 불러와야됩니다. 
// router.get('/review/:festival_id', (req, res) => {
//   console.log(req.params);
//   // { festival_id: '4' } 특정 행사의 아이디가 string으로 들어옵니다 (주의)
// // router.post('/users/signup',(req, res) => {
// //     console.log(req.body);
// //   //* DB저장 해주세욥
// //     res.send({message : "ok"})
// //   })


module.exports = router;