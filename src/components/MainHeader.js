import classes from './MainHeader.module.css'
import { NavLink } from 'react-router-dom'

const MainHeader = () => {
    return (
        <header className={classes["main-header"]}>
            <h1>
                Todos
            </h1>
            <nav>
                <ul className={classes["main-nav"]}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/todo">Todos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader