import React from "react";
import { deleteTodo } from "../../services";

const TodoList = ({ todos, setTodos }) => {
    
    const handleClick = async (id) => {
        try {
            await deleteTodo(id);
            setTodos(prevTodos => {
                return prevTodos.filter(item => item._id !== id);
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="mt-4">
            <h1 className="display-1">My Todos:</h1>
            <ul className="list-group">
                {todos.map(item => (
                    <li key={item._id} className="list-group-item d-flex justify-content-between align-items-center">
                        {item.todo}
                        <button onClick={() => handleClick(item._id)} className="btn btn-light"><i className="bi bi-trash"></i></button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;