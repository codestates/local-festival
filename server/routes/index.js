const express = require('express');
const router = express.Router();

const festivalRouter = require('./festivals');
// const usersRouter = require('./users');

router.use('/festivals', festivalRouter);
// router.use('/users', usersRouter);



//* 회원가입 라우터
router.post('/signup',(req, res) => {
  console.log(req.body);
//* DB저장 해주세욥
  res.send({message : "ok"})
})

//* 로그인 라우터
router.post('/signin', (req, res) => {
  console.log(req.body);
//아이디 검증해서 유효성 검사 후 토큰 만들어서 전송해 주세요
  res.send({message : "ok"})
})

//* 특정 축제의 리뷰글 불러오기 
//! api문서 수정해야 합니다 => 전체 글 불러오는 걸로 되어있는데 특정 축재 리뷰글로 불러와야됩니다. 
router.get('/review/:festival_id', (req, res) => {
  console.log(req.params);
  // { festival_id: '4' } 특정 행사의 아이디가 string으로 들어옵니다 (주의)
  
  //잘 넘어오나 확인하기 위해 임의로 만든 dummydata입니다. 유저 닉네임도 가져오려면 조인테이블 필요합니다.
  const dummydata = [
    {nickname : '서버에서 넘어온 데이터',
  content : 'aaa',
  rating : '333'},
  {nickname : 'mong',
  content : 'aaa',
  rating : '333'},
  {nickname : 'mong',
  content : 'aaa',
  rating : '333'},
  {nickname : 'mong',
  content : 'aaa',
  rating : '333'},
  {nickname : 'mong',
  content : 'aaa',
  rating : '333'},
  {nickname : 'mong',
  content : 'aaa',
  rating : '333'},
  {nickname : 'mong',
  content : 'aaa',
  rating : '333'},
  {nickname : 'mong',
  content : 'aaa',
  rating : '333'},
  {nickname : 'mong',
  content : 'aaa',
  rating : '333'},
  {nickname : 'mong',
  content : 'aaa',
  rating : '333'},
  ]

  res.json(dummydata)
  
})
module.exports = router;