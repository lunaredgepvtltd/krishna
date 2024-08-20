
import HashPassword from '../../helper/Hash.js';
import UserModal from '../../Modal/userModal.js';

export const Register = async(req,res,next)=>{

   try{
    const {username,email,phoneNumber,password}  = req.body;

    if (!username) {
        return next({ message: 'Username is required', statusCode: 400 });
    }
    if (!email) {
        return next({ message: 'Email is required', statusCode: 400 });
    }
    if (!phoneNumber) {
        return next({ message: 'Phone number is required', statusCode: 400 });
    }
    if (!password) {
        return next({ message: 'Password is required', statusCode: 400 });
    }

    
    const existingUser = await UserModal.findOne({email});

    if(existingUser){
        return next({ message: 'User already exists', statusCode: 409 });
    }

    const hasedPass = await HashPassword(password);

    const newUser = new UserModal({
        username,
        email,
        phoneNumber,
        password : hasedPass,
    })

    const savedUser = await newUser.save();

    
    if(!savedUser){
        next()
    }

    res.status(201).json({
        message : 'registered successfully',
        success : true,
        error : false
    })
    
   }
   catch(error){
    res.json({
        message  : error.message || 'error while registering',
        error : true,
        success : false
    })
   }
}