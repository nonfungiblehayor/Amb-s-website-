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
        " knowledge of software development and can apply technology to improve financial services.Moreover, Femi's expertise in blockchain technology suggests that he is familiar with distributed ledger systems and how they can be used to facilitate secure, transparent, and efficient financial transactions. His experience in digital payments further highlights his understanding of the intersection between technology and finance.As a research analyst, Femi is likely skilled in conducting market research and analyzing data to identify trends and insights that can inform business strategy. This skill can be particularly valuable in the fast-paced world of fintech, where innovation and agility are essential.Overall, Femi's combination of education, certification, and experience in finance, economics, and technology make him a versatile professional who can provide valuable insights and solutions in the evolving fintech industry." : <span className={style.readSpan} onClick={readMore}>..... Read more</span> }
        </p>
    </div>
}
export default FounderTxt2