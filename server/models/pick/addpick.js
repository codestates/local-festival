const db = require("../../db/index");

module.exports = {
    addpick :{
        post: ({id,content_id},callback) =>{

            const queryString= "INSERT INTO pick (user_id,content_id) VAlUES (?,?)"

            const params = [id,content_id]

            db.query(queryString,params,(error)=>{
            
                callback(error)

            })
        }
    }
}