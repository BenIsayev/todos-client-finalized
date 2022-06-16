import axios from 'axios'

const BASE_URL =
    process.env.NODE_ENV === 'production' ? '/api/' : 'http://localhost:3030/api/todo/';

const query = async () => {
    try {
        const res = await axios.get(BASE_URL)
        return res.data
    } catch (err) {
        console.error('Had error fetching todos:', err)
    }
}

const getById = async (todoId) => {
    try {
        const res = await axios.get(BASE_URL + todoId)
        return res.data
    } catch (err) {
        console.error('Had error fetching todo:', err)
    }
}

const editTodo = async (editedTodo) => {
    try {
        const res = await axios.put(BASE_URL + editedTodo._id, editedTodo)
        return res.data //Return the edited todo
    } catch (err) {
        console.error('Had error editing todo:', err)
    }
}

const deleteTodo = async (todoId) => {
    try {
        await axios.delete(BASE_URL + todoId)
    } catch (err) {
        console.error('Had error deleting todo:', err)
    }
}

const addTodo = async (todoToAdd) => {
    try {
        const res = await axios.post(BASE_URL, todoToAdd)
        return res.data //Return new todo with the id
    } catch (err) {
        console.error('Had error adding todo:', err)
    }
}

const toggleTodoDone = async (todoId) => {
    try {
        const todo = await getById(todoId)
        todo.isDone = !todo.isDone
        return await editTodo(todo)
    } catch (err) {
        console.error('Had error adding todo:', err)
    }
}

export const todoService = {
    query,
    editTodo,
    deleteTodo,
    addTodo,
    toggleTodoDone
}