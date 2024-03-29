import React from 'react';
import logo from '../images/Frame 130.webp';
import style from '../App.module.scss';
import Vector55 from '../images/Frame 5.svg';

function Header({showModal, showMenu}) {
    return <header className={style.headerSection}>
        <div className={style.headerDiv1}>
            <img src={logo} alt='amb logo' className={style.logoImg}></img>
            <p className={style.logoText}>
            AMB Consultants
            </p>
        </div>
        <nav className={style.headerDiv2}>
            <a href='#services'>Services</a>
            <a href='#pricing'>Pricing</a>
            <a href='#about'>About</a>
        </nav>
        <div className={style.headerDiv3}>
            <button className={style.contactBtn} onClick={showModal}>Contact Us</button>
        </div>
        <div className={style.headerDiv4}>
            <img src={Vector55} alt='menu bar' onClick={showMenu}></img>
        </div>
    </header>
}
export default Header