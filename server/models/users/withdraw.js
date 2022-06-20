const db = require("../../db/index");

module.exports = {
    withdraw :{
        get: (username,callback) =>{

            const queryString= `select password from users where username = "${username}"`

            db.query(queryString,(error,result)=>{
            
                callback(error,result)

            })
        },
        delete:(username,callback) =>{
            
            const queryString= `DELETE FROM users WHERE username="${username}"`

            db.query(queryString,(error,result)=>{
                callback(error,result)
            })
        }
    }
}