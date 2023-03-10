import React from "react";
import { addTodo } from "../../services";

const TodoInput = ({ todo, setTodo, todos, setTodos }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (todo === '') return;

        try {
            const { data } = await addTodo({ todo });
            setTodos([...todos, { todo: data.todo, ...data }]);
            setTodo('');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="mt-4">
            <div className="mb-3">
                <label htmlFor="todo" className="form-label">Enter a new Todo:</label>
                <input placeholder="Type Something..." type="text" className="form-control" id="todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
            </div>
            <button onClick={handleSubmit} className="btn btn-primary">Add</button>
        </div>
    );
};

export default TodoInput;