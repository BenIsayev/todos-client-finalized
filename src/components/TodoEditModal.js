import { useState } from "react"
import classes from './TodoEditModal.module.css'


const TodoEditModal = ({ id, callback, closeEdit }) => {

    const [todoText, setTodoText] = useState('')

    return (
        <div className={classes['todo-edit-modal']}>
            <h2>{id ? 'Enter new todo text' : 'What needs to be done?'}</h2>
            <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
            <button onClick={() => {
                callback(todoText)
                closeEdit()
            }}>Save</button>
            <button onClick={closeEdit}>
                Close
            </button>
        </div>
    )
}

export default TodoEditModal