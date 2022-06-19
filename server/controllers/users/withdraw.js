const { users } = require('../../db/indexS');
const bcrypt = require("bcrypt");
const {validateToken} = require('../../controllers/tokenfunctions/validateToken')

module.exports= {
    withdraw : {
        delete : async (req,res) => {
           // console.log(req.body);
            const accessTokenData = validateToken(req)

            if(!accessTokenData){
                return res.status(404).json({data:null , message: 'User not logged in'})
            }

            const {id} = accessTokenData
            const user = await users.findOne({where:{id}})
            
            const {passwordCheck} = req.body
            //console.log("🚀 ~ file: withdraw.js ~ line 18 ~ delete: ~ passwordCheck", passwordCheck)

            bcrypt.compare(passwordCheck,user.password).then(async(match) =>{
                if(!match){
                    res.json({message :"Wrong Username And Password Combination"})
                } else{
                    await user.destroy()
    
                    res.status(200).json({message : "successfully quit"})
                }

            })
            
        }
    }
}