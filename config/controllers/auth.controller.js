import mongoose from "mongoose"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import user from "../models/user.model.js";

export const signUp=async(req,res,next)=>{
    const { name, email, password } = req.body;
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const existingUser= await user.findOne({email});

        if(existingUser){
            const error = new error('user already exists');
            error.statusCode=409;
            throw error;

        }
        //hashing password
        const salt= await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password,salt);

        const newUser= await user.create([{name,email,password:hashedpassword}], {session});
        const token = jwt



        await session.commitTransaction();
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
}

export const signIn=async(req,res,next)=>{}

export const signOut=async(req,res,next)=>{}