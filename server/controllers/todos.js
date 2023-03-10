import Todo from "../models/todo.js";

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).send(todos);
    } catch (error) {
        res.status(404).send(error);
    }
};

export const addTodo = async (req, res) => {
    try {
        console.log(req.body);
        const todo = await new Todo(req.body).save();
        res.status(200).send(todo);
    } catch (error) {
        res.status(404).send(error);
    }
};

export const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        res.status(200).send(todo);
    } catch (error) {
        res.status(404).send(error);        
    }
};