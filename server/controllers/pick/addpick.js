const { pick } = require('../../db/indexS');
const {validateToken} = require('../../controllers/tokenfunctions/validateToken');
const { create } = require('mocha/lib/suite');

module.exports= {
    addpick : {
        post : async(req,res) => {
            // const accessTokenData = validateToken(req)
            // if(!accessTokenData){
            //     return res.status(404).json({data:null , message: 'User not logged in'})
            // }

            // const {id} = accessTokenData

            const {festival_id,id} = req.body
            console.log("🚀 ~ file: addpick.js ~ line 16 ~ post:async ~ festival_id", festival_id)
            console.log("🚀 ~ file: addpick.js ~ line 16 ~ post:async ~ req.body", req.body)

            // pick table에 username 와 festival_id 데이터 삽입
            await pick.create({user_id : id, festival_id : festival_id}).then(()=>{
                // 데이터를 넣었으면 응답을 돌려준다            
                    res.status(201).json({message:'ok'})
                }               
            )
        }
    }
}