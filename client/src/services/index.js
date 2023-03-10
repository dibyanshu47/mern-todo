import axios from "axios";

const URL = "https://dark-jade-swordfish-sock.cyclic.app/api/todos/";

export const getTodos = () => {
    return axios.get(URL);
};

export const addTodo = (todo) => {
    return axios.post(URL, todo);
};

export const deleteTodo = (id) => {
    return axios.delete(URL + id);
}