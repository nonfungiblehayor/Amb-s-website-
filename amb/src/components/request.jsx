import React from "react";
import style from '../App.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Request({showModal}) {
    return <>
     <section className={style.reqSection}>
        <p>
        GET STARTED - Unlock the value of your numbers.
        </p>
        <button onClick={showModal}> 
         contact us
        </button>
    </section>
    <section className={style.reqSection2} data-aos="fade-up" data-aos-duration="500">
        <div>
        <p>
        GET STARTED
        </p>
        <span>
        Unlock the value of your numbers.
        </span>
        <button onClick={showModal}>
         contact us
        </button>
        </div>
    </section>
    </>
}

export default Request