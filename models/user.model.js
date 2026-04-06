import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, 'User Name is required'],
        trim:true,
        minLength:2,
        maxLength:50,
    },
    email:{
        type: String,
        required:[true, 'User email is required'],
        unique:true,
        trim:true,
        minLength:2,
        maxLength:50,
        match:[/\S+@\S+\S+/, '{lease fill a valid email address'],
        lowercase:true,
    },
    password:{
        type: String,
        required:[true, 'User password is required'],
        minLength:6,
    }
}, {timestamp:true});

const User = mongoose.model('User', userSchema);
export default User;
