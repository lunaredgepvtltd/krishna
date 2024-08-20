export const Logout = async(req,res)=>{
    try{
     res.clearCookie("token");

     res.json({
        message : "Logged Out Successfully",
        error : false,
        success : true,
        data : []
     })
    }
    catch(error){
        res.json({
            message  : error.message || 'error in LogginOut',
            error : true,
            success : false
        })
       }
}