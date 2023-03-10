import React from "react";
import style from '../App.module.scss';

function Newsletter() {
    return <section className={style.newsletterSection}>
        <div className={style.letterDiv}>
            <span>
            Don’t miss a thing
            </span>
            <p>
            Subscribe to our newsletter
            </p>
            <div className={style.inputDiv}>
                <input type='email' placeholder="Email"></input>
                <button className={style.subBtn}>
                Subscribe
                </button>
            </div>
        </div>
    </section>
}
export default Newsletter