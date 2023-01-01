import express from "express"
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js"
const router = express.Router()



// router.get("/checkauthentication" , verifyToken , (req,res,next)=>{
//     res.send("hello user logged in")
// })

// router.get("/checkuser/:id" , verifyUser  , (req,res,next)=>{
//     res.send("hello user logged in and you can delete ur acc")
// })

// router.get("/checkadmin/:id" , verifyAdmin  , (req,res,next)=>{
//     res.send("hello admin logged in and you can delete all acc")
// })

// update

router.put("/:id",verifyUser, updateUser)

// Delete
router.delete("/:id",verifyUser, deleteUser)

// get

router.get("/:id",verifyUser, getUser)


// get all

// const failed = true

// if (failed) return next(createError(401 , "not authenictaed"))

router.get("/",verifyAdmin, getUsers)







export default router