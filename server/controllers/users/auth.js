const models  = require('../../models/users/auth');
const {validateToken} = require('../../controllers/tokenfunctions/validateToken')

module.exports= {
    auth : {
        get : async (req,res) => {
            const accessTokenData = validateToken(req)

            if(!accessTokenData){
                return res.status(404).json({data:null , message: 'No access Token'})
            }
            
            const {username} = accessTokenData

            // db 에서 username과 일치하는 데이터를 가져온다
            models.auth.get(username,(error,result)=>{
                
                if(error){
                    res.status(500).json({message :'Internal Server Error'});
                } else{
                    const {id,username,nickname} =result[0]
                    res.json({data : {user_id:id, username:username, nickname : nickname}})
                    
                }
            })

            // if(!user){
            //     return res.status(401).json({ message: "User Doesn't Exist" });
            // } 
        

            
        }
    }
}