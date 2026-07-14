import express from "express";
import {register} from "../controllers/student.js";

var studentRouter = express.Router()

studentRouter.post("/register", register)

export default studentRouter;