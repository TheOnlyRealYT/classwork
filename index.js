import express, { json } from "express";
import fs from 'fs';
import todoRouter from "./routers/todos.js";

const filepath = "todo.json"

var app = express();
app.use(json()); 
const PORT = 3000;

app.use("/todos", todoRouter);

app.listen(PORT, "localhost", ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})