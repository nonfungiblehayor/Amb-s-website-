import React, { useState } from "react";
import style from '../../App.module.scss';

function FounderTxt0() {
    const [show, displayShow] = useState(false)

    const readMore = () => {
        displayShow(!show)
    }
    return <div className={style.founderInfo}>
        <p>
        Abdulrahman has a strong professional background in finance and accounting, with a combination of academic qualifications and practical experience. 
        His expertise in corporate accounting, taxation and audit denotes that he is well-versed in
        {show ?
        "in financial reporting, compliance, and risk management. Furthermore, his proficiency in data analysis implies that he is capable of using statistical and analytical tools to extract insights from complex financial data. This skill can be particularly valuable in today's business environment, where data-driven decision-making is increasingly important.Overall, Abdulrahman's combination of education and experience in finance, accounting, and data analysis makes him a well-rounded professional who can provide valuable insights to businesses and organizations.": <span className={style.readSpan} onClick={readMore}>..... Read more</span> }
        {show ?  <span className={style.readSpan} onClick={readMore}>..... Read less</span> : ''}
        </p>
    </div>
}
export default FounderTxt0