const { users } = require('../../db/indexS');
const {validateToken} = require('../../controllers/tokenfunctions/validateToken')

module.exports={
    edit : {
        put : async(req, res) =>{
            const accessTokenData = validateToken(req)
           // console.log(req.headers);
            if(!accessTokenData){
                return res.status(404).json({data:null , message: 'User not logged in'})
            }

            const {nickname} = req.body
            const {id} = accessTokenData
            await users.update({nickname},{where:{id}})

            const user = await users.findOne({where:{id}})
           //console.log(user);
            res.status(200).json({nickname:user.nickname, message : "ok, userinfo changed"})

        }
    }
}