const { users } = require('../../db/indexS');
const bcrypt = require("bcrypt");
const {sign} = require('jsonwebtoken');
require('dotenv').config

module.exports= { 
    signin : {
        post : async(req, res) => {
            const { user_id, password } = req.body;

            const user = await users.findOne({ where: { user_id: user_id } });

            if(!user){
                return res.status(401).json({ message: "User Doesn't Exist" });
            } 

            bcrypt.compare(password,user.password)
                .then(async(match) => {
                    if(!match){
                        return res.status(401).json({ message: "Wrong Username And Password Combination" })
                    }

                    const accessToken = sign(
                        {"user_id":`${user.user_id}`, "id": `${user.id}`},
                        process.env.ACCESS_SECRET
                    )

                    res.json({data : {token : accessToken, nickname : user.nickname, user_id:user.id},message : "login success"})
                })
        }
        
    }
}