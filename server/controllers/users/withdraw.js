const models  = require('../../models/users/withdraw');
const bcrypt = require("bcrypt");
const {validateToken} = require('../../controllers/tokenfunctions/validateToken')

module.exports= {
    withdraw : {
        delete : async (req,res) => {
            const accessTokenData = validateToken(req)

            if(!accessTokenData){
                return res.status(404).json({data:null , message: 'User not logged in'})
            }

            const {username} = accessTokenData
            const {passwordCheck} = req.body
            //db에서 비밀번호를 찾아온다

            models.withdraw.get(username,(error,result)=>{
                const {password} =result[0]

                bcrypt.compare(passwordCheck,password).then(async(match) =>{
                    if(!match){
                        res.status(409).json({message :"Wrong Username And Password Combination"})
                    } else{
                        // db에서 username과 같은 열삭제
                        models.withdraw.delete(username,()=>{
                            res.status(200).json({message : "successfully quit"})
                        })      
                    }
                })
            })
        }
    }
}