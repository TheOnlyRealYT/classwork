import express from "express";
import {register, getAllMembers} from "../controllers/student.js";

var studentRouter = express.Router()

studentRouter.post("/register", register)
studentRouter.get("/", getAllMembers)

export default studentRouter;