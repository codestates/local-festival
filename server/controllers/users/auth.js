const { users } = require('../../db/indexS');
const {validateToken} = require('../../controllers/tokenfunctions/validateToken')

module.exports= {
    auth : {
        get : async (req,res) => {
            const accessTokenData = validateToken(req)

            if(!accessTokenData){
                return res.status(404).json({data:null , message: 'No access Token'})
            }
            
            const {username} = accessTokenData
            const user = await users.findOne({where:{username:username}})

            if(!user){
              return res.status(401).json({ message: "User Doesn't Exist" });
          } 
        
           
          res.json({data : {user_id:user.id, username:user.username, nickname : user.nickname}})
            
        }
    }
}