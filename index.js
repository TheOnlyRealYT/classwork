import express, { json } from "express";
import fs from 'fs';
import studentRouter from "./routers/student.js";
import departmentRouter from "./routers/department.js";
import mongoose from "mongoose";
import cors from "cors";

const filepath = "todo.json"

var app = express();
app.use(json()); 

mongoose.connect("mongodb://localhost:27017/MEAN").then(()=>{

}).catch((err) => {
    console.error(err)
})

const PORT = 3000;

//middleware
app.use(cors({
    origin:"*"
}))

app.use("/student", studentRouter);
app.use("/department", departmentRouter);

app.use((req, res, next) => {
    res.status(404).send({"message": "Page Not Found"})
    next();
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({"message": `Internal Server Error ${err.message}`});
    next();
});

app.listen(PORT, "localhost", ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})