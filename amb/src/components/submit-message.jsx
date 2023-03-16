import React from 'react';
import style from '../App.module.scss';
import logo from '../images/Frame 130.webp';

function SubmitMsg() {
    return <div className={style.submitDiv}>
        <div className={style.upDiv}>
            <p>
            Thank you for considering AMB Consultant, we look forward to the opportunity to assist you
            </p>
        </div>
        <div className={style.downDiv}>
            <div className={style.logoDiv}>
            <img src={logo} alt='amb logo' className={style.logoImg}></img>
            <p className={style.logoText}> AMB Consultants </p>
            </div>  
            <div className={style.thankDiv}>
           <p> Thank you </p>
            </div>          
        </div>
    </div>
}
export default SubmitMsg