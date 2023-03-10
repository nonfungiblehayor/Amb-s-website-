import React from "react";
import style from '../App.module.scss';
import logo from '../images/Frame 130.webp';
import twitter from '../images/twitter.webp';
import mail from '../images/mail.webp';
import phone from '../images/phone.webp';

function Footer() {
    return <footer className={style.footerSection}>
        <div className={style.footDiv}>
            <div className={style.footDiv1}>
                <div className={style.logoDiv}>
                <img src={logo} alt='amb logo'></img>
                <p className={style.logoText}>
                AMB Consultants
                </p>
                </div>
                <p>
                Financial advisors
                </p>
                <p>
                Chattered accountants
                </p>
            </div>
            <div className={style.footDiv2}>
                <h3>
                    Company
                </h3>
                <a href="/">Home</a>
                <a href="#service">Services</a>
                <a href="#pricing">Pricing</a>
            </div>
            <div className={style.footDiv3}>
                <h3>
                    Contact
                </h3>
                <div className={style.eachLink}>
                    <img src={mail} alt='alt logo'></img>
                    <p>ambconsultants0@gmail.com</p>
                </div>
                <div className={style.eachLink}>
                    <img src={phone} alt='alt logo'></img>
                    <p>+2348050796930</p>
                </div>
                <div className={style.eachLink}>
                    <img src={twitter} alt='alt logo'></img>
                    <a href="/">@ambconsultants</a>
                </div>
            </div>
        </div>
    </footer>
}
export default Footer