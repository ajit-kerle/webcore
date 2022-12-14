import jwt from "jsonwebtoken"


function auth(req,res,next){
   try{
    const token=req.headers["x-api-key"]
    jwt.verify(token,"webcore",(err,data)=>{
      if(err){
        return res.status(400).send(err.message)
      }else{
        req.userToken=data.userId
        next()
      }
    })
    

   }catch(error){
    return res.status(500).json("error while authentication")
   }
}

export default auth