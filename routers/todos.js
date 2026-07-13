import express from "express";
import { getTodo, createTodo, updateTodo, deleteTodo } from "../controllers/todos.js";

const router = express.Router();

router.get("/", getTodo);
router.post("/", createTodo);
router.put("/", updateTodo);
router.delete("/", deleteTodo);

export default router;