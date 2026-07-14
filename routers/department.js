import express from "express";
import {createDepartment, getDepartments} from "../controllers/department.js";

var departmentRouter = express.Router()

departmentRouter.post("/", createDepartment)
departmentRouter.get("/", getDepartments)

export default departmentRouter;