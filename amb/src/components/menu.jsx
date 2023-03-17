import React from "react";
import style from '../App.module.scss';
import frame423 from '../images/Frame 423.svg';

function Menu({showModal, hideMenu, hideMenu2}) {
    return <section className={style.menuSection}>
        <div className={style.cancelDiv}>
            <img src={frame423}alt='cancel' onClick={hideMenu}></img>
        </div>
        <div className={style.parent}>
         <nav className={style.headerDiv2}>
            <a href='/'>Home</a>
            <a href='#services' onClick={hideMenu2}>Services</a>
            <a href='#pricing' onClick={hideMenu2}>Pricing</a>
            <a href='#about' onClick={hideMenu2}>About</a>
        </nav>
        <div className={style.headerDiv3}>
            <button className={style.contactBtn} onClick={showModal}>Contact Us</button>
        </div>
        </div>
    </section>
}
export default Menu