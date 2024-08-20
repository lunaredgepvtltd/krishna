import UserModal from "../../Modal/userModal.js";

export const userDetails = async(req,res,next)=>{
    try{
     const userId = req?.userId;
     const user = await UserModal.findById(userId);
     
     if(!user){
        throw new Error('user does not exist')
     }

     res.status(200).json({
        message : "details sent successfully",
        data : user,
        success : true,
        error : false
     })
    }
    catch(error){
        res.json({
            message  : error.message || 'error while fetching user-details',
            error : true,
            success : false
        })
    }
}