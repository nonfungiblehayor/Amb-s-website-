import React from "react";
import style from '../../App.module.scss';
import Ellipse from '../../images/Ellipse 24.svg';
import FounderTxt from "./founder-text";
import FounderTxt2 from "./founder-text2";

function Founder() {
    return <div className={style.founderDiv}>
        <h3>
        Meet our founders
        </h3>
        <div className={style.founderDetail}>
            <img src={Ellipse} alt='pfp'></img>
            <div className={style.founderTxt}>
                <p>
                Mustapha Adeyemi (AAT & ACA)
                </p>
                <FounderTxt />
            </div>
        </div>
        <div className={style.founderDetail}>
            <img src={Ellipse} alt='pfp'></img>
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