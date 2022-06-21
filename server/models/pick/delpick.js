const db = require("../../db/index");

module.exports = {
    delpick :{
        delete: ({id,content_id},callback) =>{

            const queryString= `DELETE FROM pick WHERE user_id = ${id} AND content_id =${content_id}`

            db.query(queryString,(error)=>{
            
                callback(error)

            })
        }
    }
}