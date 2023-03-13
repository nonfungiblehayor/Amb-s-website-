import React from 'react';
import logo from '../images/Frame 130.webp';
import style from '../App.module.scss';

function Header({showModal}) {
    return <header className={style.headerSection}>
        <div className={style.headerDiv1}>
            <img src={logo} alt='amb logo' className={style.logoImg}></img>
            <p className={style.logoText}>
            AMB Consultants
            </p>
        </div>
        <nav className={style.headerDiv2}>
            <a href='/'>Home</a>
            <a href='/'>Services</a>
            <a href='/'>Pricing</a>
            <a href='/'>About</a>
        </nav>
        <div className={style.headerDiv3}>
            <button className={style.contactBtn} onClick={showModal}>Contact Us</button>
        </div>
    </header>
}
export default Header