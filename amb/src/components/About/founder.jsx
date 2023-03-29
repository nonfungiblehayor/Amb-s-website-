import React from "react";
import style from '../../App.module.scss';
import FounderTxt from "./founder-text";
import FounderTxt2 from "./founder-text2";
import FounderTxt0 from "./founder-text0";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


function Founder() {
    return <div className={style.founderDiv}>
        <h3 data-aos="fade-up" data-aos-duration="500">
        Meet our founders
        </h3>
        <div className={style.founderDetail} data-aos="fade-up" data-aos-duration="500">

            <div className={style.founderTxt}>
                <p className={style.ramzy}>
                Adeniyi Abdulrahman  (AAT & ACA)
                </p>
                <FounderTxt0 />
            </div>
        </div>
        <div className={style.founderDetail} data-aos="fade-up" data-aos-duration="500">
        <div className={style.founderTxt}>
                <p>
                Mustapha Adeyemi (AAT & ACA)
                </p>
                <FounderTxt />
        </div>
        </div>
        <div className={style.founderDetail} data-aos="fade-up" data-aos-duration="500">
            <div className={style.founderTxt}>
                <p>
                Babatunde Femi (AAT & ACA)
                </p>
                <FounderTxt2 />
            </div>
        </div>
    </div>
}
export default Founder