import express from "express";
import {createUser,getUserById,getUsers,updateUser,deleteUser,loginUser} from "../controllers/userControler.js"
import auth from "../middleware/auth.js"
const router=express.Router()




// login user
router.get("/login",loginUser)


// ==========================================
// create user
router.post("/create",createUser)

// get single user
router.get("/user/:id",auth,getUserById) // note provid id of user for testing

// get all users
router.get("/users",getUsers)

// updating user
router.put("/update/:id",auth,updateUser) // note provid id of user for testing

// delete user
router.delete("/delete/:id",auth,deleteUser) // note provid id of user for testing
//=================================================



router.get("/*",(req,res)=>{
    res.send("page not found")
})

export default router