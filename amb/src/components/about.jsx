import React from "react";
import style from '../App.module.scss';
import AboutAmb from "./About/aboutAmb";
import Founder from "./About/founder";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function About() {
    return <section className={style.aboutSection} id='about'>
        <AboutAmb />
        <Founder />
    </section>
}
export default About