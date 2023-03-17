import React from 'react';
import style from '../../App.module.scss';
import Frame338 from '../../images/Frame 338.svg';

function Pro(props) {
    return <div className={style.proDiv}>
         <div className={style.upDiv}>
            <p>
            Pro
            </p>
        </div>
        <div className={style.priceDiv}>
            <p>
            N70,000 <span>Monthly</span>
            </p>
        </div>
        <div className={style.pkg}>
        <h4>
        For businesses who are serious about the next stage of their growth
        </h4>
        <div className={style.pkgList}>
         <div className={style.each}> <img src={Frame338} alt='checkmark'></img> <label>Cloud Accounting</label> </div>
         <div className={style.each}> <img src={Frame338} alt='checkmark'></img> <label>Monthly Financial Statements</label> </div>
         <div className={style.each}> <img src={Frame338} alt='checkmark'></img> <label>2 Monthly Management Meeting</label>  </div>    
         <div className={style.each}> <img src={Frame338} alt='checkmark'></img> <label>Detailed Management Report</label>  </div>
         <div className={style.each}> <img src={Frame338} alt='checkmark'></img> <label>Monthly Tax Returns</label>  </div>
         <div className={style.each}> <img src={Frame338} alt='checkmark'></img> <label>Budgets & Forecasting</label>  </div>
         <div className={style.each}> <img src={Frame338} alt='checkmark'></img> <label>Tax Planning & Advisory</label>  </div>
        </div>
        <div className={style.contactDiv}>
            <button className={style.contactBtn} onClick={props.fnc}>
            Contact sales
            </button>
        </div>
        </div>
    </div>
}
export default Pro