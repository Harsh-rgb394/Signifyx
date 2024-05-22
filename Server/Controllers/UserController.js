const express=require("express");
const user=require("../Models/Usermodel");
const bcryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");

const logincontroller=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const exist_user=await user.findOne({email});

        if(!exist_user){
            res.status(404).json({message:"User does not exist",success:false});
        }

        const matchedpassword=await bcryptjs.compare(password,exist_user.password);

        if(!matchedpassword){
            res.status(404).json({message:"Password not match",success:false});
        }

        const token= jwt.sign({email:exist_user.email,id:exist_user._id},process.env.JWT_SECRET,{expiresIn:"1d"});

        res.status(200).json({message:"User login Sucessfully",success:true,data:exist_user,token});

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error while registing User",success:false});
    }

}

const registercontroller=async(req,res)=>{
    try {
        const {name,email,password}=req.body;

        const exist_user=await user.findOne({email});

        if(exist_user){
            res.status(404).json({message:"User already exist",success:false});
        }

       

        const hashedpassword=await bcryptjs.hash(password,10);

        const result=await user.create({name,email,password:hashedpassword});

        res.status(200).json({message:"User register Successfully",success:true});


        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error while registing User",success:false});

        
    }

}

module.exports={logincontroller,registercontroller};