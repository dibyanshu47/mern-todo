import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    todo: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: new Date()
    }
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;