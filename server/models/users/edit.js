const db = require("../../db/index");

module.exports = {
    edit :{
        put: ({nickname,id},callback) =>{

            const queryString= `UPDATE users SET nickname ="${nickname}" where id = "${id}"`

            db.query(queryString,(error,result)=>{
            
                callback(error,result)

            })
        }
    }
}