import React, { useState } from "react";
import style from '../../App.module.scss';

function FounderTxt() {
    const [show, displayShow] = useState(false)

    const readMore = () => {
        displayShow(!show)
    }
    return <div className={style.founderInfo}>
        <p>
        Mustapha is a Chartered Accountant with a Bachelor's degree in accounting and experience in both private and public sector accounting. 
        His expertise in accounting implies that he is knowledgeable in financial analysis, reporting, and 
        {show ?
        "Mustapha is a Chartered Accountant with a Bachelor's degree in accounting and experience in both private and public sector accountingHis expertise in accounting implies that he is knowledgeable in financial analysis" : <span className={style.readSpan} onClick={readMore}>..... Read more</span> }
        </p>
    </div>
}
export default FounderTxt