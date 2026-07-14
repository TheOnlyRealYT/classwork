import express, { json } from "express";
import fs from 'fs';
import studentRouter from "./routers/student.js";
import departmentRouter from "./routers/department.js";
import mongoose from "mongoose";

const filepath = "todo.json"

var app = express();
app.use(json()); 

mongoose.connect("mongodb://localhost:27017/MEAN").then(()=>{

}).catch((err) => {
    console.error(err)
})

const PORT = 3000;

app.use("/student", studentRouter);
app.use("/department", departmentRouter);

app.listen(PORT, "localhost", ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})