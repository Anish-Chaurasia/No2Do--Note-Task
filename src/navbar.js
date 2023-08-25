import React from 'react'
import style from './navbar.module.css'
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <div className={style.nav}>
            <div id={style.logo}>
                <img src="./logo.png" alt="No2Do logo" />
            </div>
            <ul>
                <li ><NavLink className={style.link} style={{ textDecoration: 'none' }} to="/">Make TODO's</NavLink></li>
                <li ><NavLink className={style.link} style={{ textDecoration: 'none' }} to="/note">Make Note's</NavLink></li>
            </ul>

        </div>
    )
}

export default Nav;
