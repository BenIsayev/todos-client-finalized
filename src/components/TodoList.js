import TodoPreview from './TodoPreview'
import classes from './TodoList.module.css'

const TodoList = ({ todos, submitEditTodo, deleteTodo, toggleTodoDone }) => {
    const sortedTodos = todos.sort((t1, t2) => { return (t1.isDone === t2.isDone) ? 0 : t2.isDone ? -1 : 1; })
    return (
        <ul className={classes['todo-list']}>
            {sortedTodos.map(todo => <TodoPreview todo={todo} key={todo._id} submitEditTodo={submitEditTodo} deleteTodo={deleteTodo} toggleTodoDone={toggleTodoDone} />)}
        </ul>
    )
}

export default TodoList