const models  = require('../../models/users/edit');
const {validateToken} = require('../../controllers/tokenfunctions/validateToken')

module.exports={
    edit : {
        put : async(req, res) =>{
            const accessTokenData = validateToken(req)
            if(!accessTokenData){
                return res.status(404).json({data:null , message: 'User not logged in'})
            }

            const {nickname} = req.body
            const {id} = accessTokenData

            models.edit.put({nickname,id},(error)=>{
                if(error){
                    res.status(500).json({message :'Internal Server Error'});
                } else{
                    res.status(200).json({nickname:nickname, message : "ok, userinfo changed"})
                }
            })

        }
    }
}