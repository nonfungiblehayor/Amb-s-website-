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
        "compliance. His experience in multiple sectors also suggests that he has a diverse range of skills and can adapt to different accounting practices.Moreover, has experience as a Payroll officer in a top bank in Nigeria indicates that he has knowledge of human resources and payroll administration. This experience can be particularly valuable in the accounting field, where payroll and benefits management are essential aspects of financial management.Overall, his combination of education and experience in accounting and human resources makes him a well-rounded professional who can provide valuable financial insights and services to businesses and organizations" : <span className={style.readSpan} onClick={readMore}>..... Read more</span> }
         {show ?  <span className={style.readSpan} onClick={readMore}>..... Read less</span> : ''}
        </p>
    </div>
}
export default FounderTxt