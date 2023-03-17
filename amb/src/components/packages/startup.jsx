import React from 'react';
import style from '../../App.module.scss';
import Frame338 from '../../images/Frame 338.svg';

function Startup(props) {
    return <div className={style.startUpdiv}>
        <div className={style.upDiv}>
            <p>
            Start-up
            </p>
        </div>
        <div className={style.priceDiv}>
            <p>
            N15,000 <span>Monthly</span>
            </p>
        </div>
        <div className={style.pkg}>
        <h4>
        For contractors, micro businesses or if you’re just starting out
        </h4>
        <div className={style.pkgList}>
         <div className={style.each}> <img src={Frame338} alt='checkmark'></img> <label>Cloud Accounting</label> </div>
         <div className={style.each}> <img src={Frame338} alt='checkmark'></img> <label>Monthly Financial Statements</label> </div>
         <div className={style.each}> <img src={Frame338} alt='checkmark'></img> <label>1 Monthly Management Meeting</label>  </div>     
        </div>
        <div className={style.contactDiv}>
            <button className={style.contactBtn} onClick={props.fnc}>
            Contact sales
            </button>
        </div>
        </div>
    </div>
}
export default Startup