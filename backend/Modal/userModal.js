import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        trim: true 
    },
    phoneNumber: {
        type: String,
        required: [true, 'Phone number is required'],
        unique: true,
        match: [/^\+?[1-9]\d{1,14}$/, 'Please fill a valid phone number'] 
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true, // Optional: enforce unique emails
        match: [/\S+@\S+\.\S+/, 'Please fill a valid email address'] 
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [5, 'Password must be at least 5 characters long']
    },
    role : {
      type : 'String',
      default: 'GENERAL'  
    }
},{
    timestamps : true
});

const UserModal = mongoose.model('User', userSchema);
export default UserModal;
