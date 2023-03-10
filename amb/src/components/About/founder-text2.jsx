import React, { useState } from "react";
import style from '../../App.module.scss';

function FounderTxt2() {
    const [show, displayShow] = useState(false)

    const readMore = () => {
        displayShow(!show)
    }
    return <div className={style.founderInfo}>
        <p>
        Femi's background in accounting, economics, and 
        finance provides him with a strong foundation in financial analysis, reporting, and risk management. 
        Additionally,his experience as a fintech technical product manager indicates that he has 
        {show ?
        "Mustapha is a Chartered Accountant with a Bachelor's degree in accounting and experience in both private and public sector accountingHis expertise in accounting implies that he is knowledgeable in financial analysis" : <span className={style.readSpan} onClick={readMore}>..... Read more</span> }
        </p>
    </div>
}
export default FounderTxt2