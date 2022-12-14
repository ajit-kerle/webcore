import User from "../models/userModel.js"
import jwt from "jsonwebtoken"
import isValid from "../utils/validator.js"

// login user function
const loginUser=async (req,res)=>{
    try{
        const {username,password}=req.body

        if(!isValid(req.body)){
            res.send("required field are not null , undefined or empty")
            return
        }

        const loginUser=await User.findOne({username:username,password:password})
        if(!loginUser){
            res.status(404).json("user not found")
            return
        }
        console.log(loginUser)

        // jwt token assignation
        let token=jwt.sign({userId:loginUser._id},"webcore")
        res.setHeader("x-api-key",token)

        // return response
        res.status(201).json({status:true,token:token,data:loginUser})
    }catch(error){
        res.status(500).json({message:"login error",message:error.message})
    }
}


// create user 
const createUser=async(req,res)=>{
    try{
      const userData=req.body
      
       if(!isValid(userData)){
            res.send("required field are not null , undefined or empty")
            return
        }

      const savedUser=await User.create(userData)
      console.log(savedUser)
      res.status(201).json(savedUser)
    }catch(error){
      res.status(500).json({message:"createUser error",message:error.message})
    }
}
// get user by id
const getUserById=async(req,res)=>{
    try{
        const userId=req.params.id

        // autherization code for geting single user
        if(req.userToken!=userId){
            res.status(401).json("you are not authorized")
            return
        }

        const getUser=await User.findById(userId)
        console.log(getUser)
        res.status(200).json(getUser)
        
    }catch(error){
       res.status(500).json({message:"getUserById error",message:error.message})
    }
}
// get all users
const getUsers=async(req,res)=>{
    try{
        const allUsers=await User.find()
        console.log(allUsers)
        res.status(200).json(allUsers)
    }catch(error){
       res.status(500).json({message:"getAlluser error",message:error.message})
    }
}
// update user
const updateUser=async(req,res)=>{
    try{
        const userId=req.params.id
        const userData=req.body

       

        // autherization code for u[date user
        if(req.userToken!=userId){
            res.status(401).json("you are not authorized to update")
            return
        }

        const updatedUser=await User.findByIdAndUpdate({_id:userId},userData,{new:true})
        console.log(updatedUser)
        res.status(201).json(updatedUser)

    }catch(error){
       res.status(500).json({message:"updateUser error",message:error.message})
    }
}

// delete user
const deleteUser=async(req,res)=>{
    try{
        const userId=req.params.id
        
        // autherization code for delete user
        if(req.userToken!=userId){
            res.status(401).json("you are not authorized to delete")
            return
        }

        await User.deleteOne({_id:userId})
        console.log("user deleted..")
        res.status(201).json("user deleted successfully.")
    }catch(error){
       res.status(500).json({message:"deleteUser error",message:error.message})
    }
}


export {createUser,getUserById,getUsers,deleteUser,updateUser,loginUser}