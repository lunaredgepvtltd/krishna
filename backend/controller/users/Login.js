import bcrypt from 'bcrypt'
import UserModal from '../../Modal/userModal.js';
import jwt from 'jsonwebtoken'

export const Login = async(req,res,next)=>{
    try{

        const {identifier,password}  = req.body;

        console.log(identifier,password)
        
        if(!identifier){
            return next({ message: 'email/phoneNumber is required', statusCode: 400 });
        }
        if (!password) {
            return next({ message: 'Password is required', statusCode: 400 });
        }

        const user = await UserModal.findOne({
            $or: [
                { email: identifier }, 
                { phoneNumber: identifier } 
            ]
        });
    

        if(!user){
            return next({ message: 'Please Register first' });
        }

        const checkPassword = await bcrypt.compare(password,user.password);

        console.log(checkPassword)

        if(!checkPassword){
            return next({message : "Incorrect Password"})
        }
        
        const tokenData = {
            _id : user._id,
            email : user?.email
        }

        const token = await jwt.sign(tokenData,process.env.SECRET_TOKEN_KEY,{expiresIn : '14d'});
        console.log(token)
        
        const tokenOption = {
            httpOnly : true,
            secure : true,
            sameSite: 'Strict'
        }

       
       res.cookie("token",token,tokenOption).status(200).json({
        message : "login successfully",
        success : true,
        error : false,
        data : token
       })
    }
    catch(error){
        res.json({
            message  : error.message || 'error while Login',
            error : true,
            success : false
        })
       }
}