import express from "express"
import { registerUser, loginUser, userCredits } from "./../controllers/userController.js"
import userAuth from "../middlewares/auth.js"

const userRouter = express.Router()

userRouter.route("/signup").post(registerUser)
userRouter.route("/signin").post(loginUser)
userRouter.route("/").post(loginUser)
userRouter.get("/credits", userAuth,userCredits)

userRouter.route("*").all((req,res)=> {
    res.status(404).json({message: "Requested page not found!"})
})

export default userRouter