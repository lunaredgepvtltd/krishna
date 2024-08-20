import bcrypt from 'bcrypt'
const HashPassword = async(password)=>{
try{
 const salt = await bcrypt.genSalt(10);
 const hashedPass = await bcrypt.hash(password,salt);

 return  hashedPass;
}
catch(error){
    console.log(error)
}
}

export default HashPassword;