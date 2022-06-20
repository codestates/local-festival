const models  = require('../../models/pick/getpick');
const {validateToken} = require('../../controllers/tokenfunctions/validateToken');

module.exports= {
    getpick : {
        get : (req,res) => {
            const accessTokenData = validateToken(req)
            if(!accessTokenData){
                return res.status(404).json({data:null , message: 'User not logged in'})
            }

            const {id} = accessTokenData

            // pick table에 id기준으로 content_id 데이터 불러오기
            models.getpick.get(id,(error,result)=>{
                
                if(error){
                    res.status(500).json({message :'Internal Server Error'});
                } else{
                    res.status(201).json({data : {result}})
                }
            })
        }
    }
}