import React from 'react';
import style from '../App.module.scss';
import Group133 from '../images/Group 133.webp';

function Subheader() {
    return <section className={style.subHeaderSection}>
        <div className={style.subSection1}>
            <h2>
            <span>Innovative</span> financial solutions made <span>easy</span>
            </h2>
            <p>
            Making financial statements, taxation, and 
            other technical financial matters easier to understand and manage
            </p>
            <button className={style.quoteBtn}>
            Request A quote
            </button>
        </div>
        <div className={style.subSection2}>
            <img src={Group133} alt='chrat logo'></img>
        </div>
    </section>
}
export default Subheader