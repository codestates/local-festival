const db = require("../../db/index");

module.exports = {
    auth :{
        get: (username,callback) =>{

            const queryString= `SELECT * FROM users where username = "${username}"`

            db.query(queryString,(error,result)=>{
            
                callback(error,result)

            })
        }
    }
}