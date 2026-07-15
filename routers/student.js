import express from "express";
import {register, getAllMembers, login} from "../controllers/student.js";
import auth from "../auth/auth.js";

var studentRouter = express.Router()

studentRouter.post("/register", register)
studentRouter.get("/", auth, getAllMembers)
studentRouter.post("/login", login)

export default studentRouter;