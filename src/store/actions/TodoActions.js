import { todoService } from '../../services/todoService';

export const loadTodos = () => {
    return async (dispatch, getState) => {
        try {
            const todos = await todoService.query();
            dispatch({ type: 'SET_TODOS', todos });
        } catch (err) {
            console.error('Faild setting todos:', err);
        }
    };
}
export const editTodo = (editedTodo) => {
    return async (dispatch, getState) => {
        try {
            let { todos } = getState().TodoModule;
            if (editedTodo.title.trim() === '') return 'Cant add empty todo'
            const savedTodo = await todoService.editTodo(editedTodo);
            const todoIdx = todos.findIndex(todo => todo._id === editedTodo._id)
            if (todoIdx !== -1) {
                const todosCopy = JSON.parse(JSON.stringify(todos))
                todosCopy.splice(todoIdx, 1, savedTodo)
                dispatch({ type: 'SET_TODOS', todos: todosCopy });
            }
        } catch (err) {
            console.error('Faild setting todos:', err);
        }
    };
}
export const deleteTodo = (todoId) => {
    return async (dispatch, getState) => {
        try {
            let { todos } = getState().TodoModule;
            await todoService.deleteTodo(todoId);
            const updatedTodos = todos.filter(todo => todo._id !== todoId)
            dispatch({ type: 'SET_TODOS', todos: updatedTodos });
        } catch (err) {
            console.error('Faild setting todos:', err);
        }
    };
}

export const addTodo = (todoToAdd) => {
    return async (dispatch, getState) => {
        try {
            let { todos } = getState().TodoModule;
            if (todoToAdd.title.trim() === '') return 'Cant add empty todo'
            if (todos.length >= 10) return 'Maximum 10 todos allowed'
            const newTodo = await todoService.addTodo(todoToAdd);
            const todosCopy = JSON.parse(JSON.stringify(todos))
            todosCopy.unshift(newTodo)
            dispatch({ type: 'SET_TODOS', todos: todosCopy });
        } catch (err) {
            console.error('Faild setting todos:', err);
        }
    };
}
export const toggleTodoDone = (todoId) => {
    return async (dispatch, getState) => {
        try {
            let { todos } = getState().TodoModule;
            const savedTodo = await todoService.toggleTodoDone(todoId);
            const todoIdx = todos.findIndex(todo => todo._id === todoId)
            if (todoIdx !== -1) {
                const todosCopy = JSON.parse(JSON.stringify(todos))
                todosCopy.splice(todoIdx, 1, savedTodo)
                dispatch({ type: 'SET_TODOS', todos: todosCopy });
            }
        } catch (err) {
            console.error('Faild setting todos:', err);
        }
    };
}