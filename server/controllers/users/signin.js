const { users } = require('../../db/indexS');
const bcrypt = require("bcrypt");
const {sign} = require('jsonwebtoken');
require('dotenv').config

module.exports= { 
    signin : {
        post : async(req, res) => {
            const { username, password } = req.body;

            const user = await users.findOne({ where: { username: username } });

            if(!user){
                return res.status(401).json({ message: "User Doesn't Exist" });
            } 

            bcrypt.compare(password,user.password)
                .then(async(match) => {
                    if(!match){
                        return res.status(401).json({ message: "Wrong Username And Password Combination" })
                    }

                    const accessToken = sign(
                        {"username":`${user.username}`, "id": `${user.id}`},
                        process.env.ACCESS_SECRET
                    )

                    res.json({data : {token : accessToken, user_id:user.id, username:username, nickname : user.nickname},message : "login success"})
                })
        }

    }
}