const models  = require('../../models/users/signin');
const bcrypt = require("bcrypt");
const {sign} = require('jsonwebtoken');
require('dotenv').config

module.exports= { 
    signin : {
        post : (req, res) => {
            const { username, password } = req.body;
            
            models.signin.post(username,(error,result) =>{

                if(error){
                    res.status(500).json({message :'Internal Server Error'});
                } else if(result.length===0){
                    res.status(409).json({ message: "User Doesn't Exist" })
                    
                }
                else{
                    const {id, username,nickname } = result[0]
                    bcrypt.compare(password,result[0].password)
                        .then(async(match) => {
                            if(!match){
                                return res.status(401).json({ message: "Wrong Username And Password Combination" })
                            }
        
                            const accessToken = sign(
                                {"username":`${username}`, "id": `${id}`},
                                process.env.ACCESS_SECRET
                            )
        
                            res.json({data : {token : accessToken, user_id:id, username:username, nickname : nickname},message : "login success"})
                        })
                }
            })
        }
    }
}