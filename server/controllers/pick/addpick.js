const models  = require('../../models/pick/addpick');
const {validateToken} = require('../../controllers/tokenfunctions/validateToken');

module.exports= {
    addpick : {
        post : async(req,res) => {
            const accessTokenData = validateToken(req)
            if(!accessTokenData){
                return res.status(404).json({data:null , message: 'User not logged in'})
            }

            const {id} = accessTokenData

            const {content_id} = req.body

            // pick table에 username 와 festival_id 데이터 삽입
            models.addpick.post({id,content_id},(error)=>{
                if(error){
                    res.status(500).json({message :'Internal Server Error'});
                } else{
                    res.status(201).json({message:'pick ok'})
                }
            })
        }
    }
}
