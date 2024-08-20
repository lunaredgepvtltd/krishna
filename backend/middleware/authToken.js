import jwt from 'jsonwebtoken'


export const authToken = async(req,res,next)=>{

try{


 const token = req.cookies?.token;

 if(!token){
    return res.status(200).json({
        message : "Please login!!",
        error : true,
        success : false,
        data : []
    })
 }

 jwt.verify(token,process.env.SECRET_TOKEN_KEY,function(err,decoded){
    if(err){
        console.log("auth error",err);
    }

    req.userId = decoded?._id;
    next();
 })

}
catch(error){
    res.status(400).json({
        message : error.message || error,
        data : [],
        error : true,
        success : false
    })
}
}