require('dotenv').config()
const {verify} =require('jsonwebtoken')


module.exports={
    validateToken : (req) => {
        const validateToken = req.headers["accesstoken"]

        if(!validateToken){
            return null
        }

        try{
            return verify(validateToken, process.env.ACCESS_SECRET)
        } catch(err){
            return null
        }
    }
}