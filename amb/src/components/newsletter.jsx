import React from "react";
import style from '../App.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Newsletter() {
    return <section className={style.newsletterSection}  data-aos="fade-up" data-aos-duration="1000">
        <div className={style.letterDiv}>
            <span>
            Don’t miss a thing
            </span>
            <p>
            Subscribe to our newsletter
            </p>
            <div className={style.inputDiv}>
                <input type='email' placeholder="Your Email"></input>
                <button className={style.subBtn}>
                Subscribe
                </button>
            </div>
        </div>
    </section>
}
export default Newsletter