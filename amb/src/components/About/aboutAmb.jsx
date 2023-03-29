import React from "react";
import style from '../../App.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function AboutAmb() {
    return <div className={style.aboutDiv1} data-aos="fade-up" data-aos-duration="1000">
        <h3>
        About AMB Consultants
        </h3>           
        <p>   Our mission is to offer clients exceptional financial expertise and 
            services that empower our clients to make strategic decisions and achieve their goals.
            The company is committed to staying at the forefront of technological advancements, promoting a culture of financial innovation,
            and delivering comprehensive financial analysis and 
            information to become a reliable partner in the success of our clients.
        </p>
    </div>
}
export default AboutAmb