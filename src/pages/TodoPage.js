import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { loadTodos, editTodo, deleteTodo, addTodo, toggleTodoDone } from '../store/actions/TodoActions';
import TodoList from '../components/TodoList'
import TodoEditModal from '../components/TodoEditModal';

const TodoPage = () => {
    const dispatch = useDispatch()

    const [isAddShown, setIsAddShown] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        dispatch(loadTodos())
        setIsLoading(false)
    }, [dispatch, setIsLoading])

    const submitEditTodo = (todo) => {
        dispatch(editTodo(todo))
    }

    const submitDeleteTodo = (todoId) => {
        dispatch(deleteTodo(todoId))
    }

    const submitAddTodo = (todoTitle) => {
        dispatch(addTodo({
            title: todoTitle,
            isDone: false,
            createdAt: Date.now()
        }))
    }

    const submitToggleTodoDone = (todoId) => {
        dispatch(toggleTodoDone(todoId))
    }

    const { todos } = useSelector((state) => state.TodoModule)

    return (
        <section>
            {todos?.length < 10 && <button onClick={() => { setIsAddShown(true) }}>Add todo</button>}
            {todos?.length > 0 ?
                <TodoList todos={todos} submitEditTodo={submitEditTodo} deleteTodo={submitDeleteTodo} toggleTodoDone={submitToggleTodoDone} />
                :
                <div>
                    No todos to display
                </div>
            }
            {isAddShown && <TodoEditModal callback={submitAddTodo} closeEdit={() => { setIsAddShown(false) }} />}
        </section>
    )
}

export default TodoPage