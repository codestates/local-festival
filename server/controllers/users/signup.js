const models = require('../../models/users/signup');
const bcrypt = require("bcrypt");

module.exports = {
    signup : { 
        post : (req, res) => {
    
            const {username, password, nickname}=req.body

            if(!username||!password||!nickname){ //파라미터 중 하나라도 요청에서 제공되지 않았다면 400 상태코드로 응답을 돌려줘야 합니다
                return res.status(400).send('Unauthorized user')
            }

            bcrypt.hash(password,10).then((hash) =>{ // 비밀번호를 해상해서 db로 보내준다.

                const newUser = {
                    username: username,
                    password: hash,
                    nickname : nickname
                };

                models.signup.post(newUser,(error,result) => {
                    if(error){
                        res.status(500).json({message :'Internal Server Error'});
                    } else if(Array.isArray(result)){
                        res.status(409).json({message :"User ID is already in use"})
                    }else{
                        res.status(201).json({message:'ok'})
                    }
                })
            })
    }}
}