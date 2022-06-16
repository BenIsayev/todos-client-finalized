import { useState } from "react"
import classes from './TodoEditModal.module.css'


const TodoEditModal = ({ todo, callback, closeEdit }) => {

    let initialText = ''
    if (todo) {
        initialText = todo.title
    }

    const [todoText, setTodoText] = useState(initialText)

    const submitHandler = (e) => {
        e.preventDefault()
        callback(todoText)
        closeEdit()
    }

    return (
        <div className={classes['todo-edit-modal']}>
            <form onSubmit={submitHandler}>
                <h2>{todo?._id ? 'Enter new todo text' : 'What needs to be done?'}</h2>
                <input autoFocus type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
                <button type="submit">Save</button>
            </form>
            <button onClick={closeEdit}>
                Close
            </button>
        </div>
    )
}

export default TodoEditModal