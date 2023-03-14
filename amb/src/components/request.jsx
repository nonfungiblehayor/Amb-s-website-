import React from "react";
import style from '../App.module.scss';

function Request() {
    return <>
     <section className={style.reqSection}>
        <p>
        GET STARTED - Unlock the value of your numbers.
        </p>
        <button>
        Request A Quote
        </button>
    </section>
    <section className={style.reqSection2}>
        <div>
        <p>
        GET STARTED
        </p>
        <span>
        Unlock the value of your numbers.
        </span>
        <button>
        Request A Quote
        </button>
        </div>
    </section>
    </>
}

export default Request