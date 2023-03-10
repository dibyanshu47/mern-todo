import express from "express";
import { getTodos, addTodo, deleteTodo } from "../controllers/todos.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", addTodo);
router.delete("/:id", deleteTodo);

export default router;