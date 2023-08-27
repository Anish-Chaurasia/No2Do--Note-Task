import React, { useState } from 'react'
import style from './navbar.module.css'
import { NavLink } from 'react-router-dom';

function Nav() {
    const [menu, setMenu] = useState(false);
    return (
        <div className={style.nav}>
            <div id={style.logo}>
                <img src="./logo.png" alt="No2Do logo" />
            </div>
            <ul >
                <div className={menu ? style.mobshownav : style.desknavitem}>
                    <li  onClick={()=>setMenu(!menu)}><NavLink className={style.link} style={{ textDecoration: 'none' }} to="/">Make TODO's</NavLink></li>
                    <li onClick={() => setMenu(!menu)} ><NavLink className={style.link} style={{ textDecoration: 'none' }} to="/note">Make Note's</NavLink></li>
                    <p>© Copyright 2021 |<span> No2Do.com</span> with Mr_Anish</p>
                </div>

            </ul>
            
            <button className={style.menubtn} onClick={() => setMenu(!menu)}> {!menu ? <img src='./open.png' /> : <img src='./close.png' />} </button>
        </div>


    )
}

export default Nav;
