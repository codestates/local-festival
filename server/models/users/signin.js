const db = require("../../db/index");

module.exports = {
    signin :{
        post: (username,callback) =>{
 
        const queryString= `select * from users where username = "${username}"`

        db.query(queryString,(error,result)=>{

            callback(error,result)
            }
        )
    }
  }
};