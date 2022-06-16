import { NavLink } from 'react-router-dom'

import classes from './HomePage.module.css'

const HomePage = () => {
    return (
        <section className={classes['home-page']}>
            <h1>Hello! this is a todo app and we are happy to see you here!</h1>
            <img src="https://c.tenor.com/t6zKtQ38LhAAAAAC/it-is-so-great-to-have-you-here-good-for-you-to-be-here.gif" alt="" />
            <NavLink to="/todo" className={classes.link}>Get started</NavLink>
        </section>
    )
}

export default HomePage