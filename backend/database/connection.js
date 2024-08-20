import mongoose from "mongoose";

const connect = async()=>{
try{
    const myconnection = await mongoose.connect(process.env.MONGO_CONNECTION_URL);
    console.log("database connected successfully!")
}
catch(error){
    console.log("error in connecting database")
}
}

export default connect;