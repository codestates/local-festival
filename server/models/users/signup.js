const db = require("../../db/index");

module.exports = {
  signup :{
    post: (newUser,callback) =>{

      const {username,password,nickname} = newUser
      const queryString= `select username from users where username = "${username}"`

      db.query(queryString,(error,result)=>{
        
        if(error){

          return callback(error)

        } else if(result.length!==0){
          
          return callback(error,result)
          
        } else{
          
          const queryString="INSERT INTO users (username,password,nickname) VAlUES (?,?,?) "
          
          const params = [username,password,nickname]
          
          db.query(queryString, params, (error, result) => {
            callback(error, result);
          });
          
        }
      })
    }
  }
};