const { users } = require('../../db/indexS');
const {validateToken} = require('../../controllers/tokenfunctions/validateToken')

module.exports= {
    auth : {
        get : async (req,res) => {
            console.log(req.headers);
            const accessTokenData = validateToken(req)

            if(!accessTokenData){
                return res.status(404).json({data:null , message: 'No access Token'})
            }
            
            const {user_id} = accessTokenData
            const user = await users.findOne({where:{user_id:user_id}})

            if(!user){
              return res.status(401).json({ message: "User Doesn't Exist" });
          } 
        console.log('user!!!!', user);
           
          res.json({data : {user_id :user.user_id, nickname : user.nickname}})
            
        }
    }
}