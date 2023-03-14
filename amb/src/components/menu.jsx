import React from "react";
import style from '../App.module.scss';
import frame423 from '../images/Frame 423.svg';

function Menu({showModal, hideMenu}) {
    return <section className={style.menuSection}>
        <div className={style.cancelDiv}>
            <img src={frame423}alt='cancel' onClick={hideMenu}></img>
        </div>
        <div className={style.parent}>
         <nav className={style.headerDiv2}>
            <a href='/'>Home</a>
            <a href='/'>Services</a>
            <a href='/'>Pricing</a>
            <a href='/'>About</a>
        </nav>
        <div className={style.headerDiv3}>
            <button className={style.contactBtn} onClick={showModal}>Contact Us</button>
        </div>
        </div>
    </section>
}
export default Menu