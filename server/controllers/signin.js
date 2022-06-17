const { users } = require('../db/indexS');
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");


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
                        {user_id:users.user_id, id: users.id},
                        "importantsecret"
                    )
                    // res.json({ token: accessToken, user_id: user_id, id: user.id, nickname: user.nickname });
                    res.json({data : {token : accessToken, nickname : user.nickname, user_id:user.id},message : "login success"})
                })
        }
        
    }
}