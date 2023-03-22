import React from 'react';
import style from '../App.module.scss';
import frame423 from '../images/Frame 423.svg';
import Quoteform from './quote-form';
import SubmitMsg from './submit-message';

function Quote({hideModal}) {
    return <section className={style.quoteSection}>
        <div className={style.cancelDiv}>
            <img src={frame423} alt='cancel logo' onClick={hideModal}></img>
        </div>
        <div className={style.formDiv}>
            <form className={style.form}>
                <div className={style.formInfo}>
                    <Quoteform tag='First name' type='text' holder='first name' /> 
                    <Quoteform tag='Last name' type='text' holder='last name' />                   
                </div>
                <div className={style.formInfo}>
                    <Quoteform tag='Email' type='email' holder='Email' />
                    <Quoteform tag='Company name' type='text' holder='Company name' />                
                </div>
                <div className={style.formInfo2}>
                    <label>Your message</label>
                    <textarea placeholder='Ask us anything and we will get back to you shortly'></textarea>
                </div>
                <div className={style.formInfo3}>
                    <button type='submit' className={style.btn}>submit</button>
                </div>
            </form>
        </div>
        {/* <SubmitMsg /> */}
    </section>
}
export default Quote
