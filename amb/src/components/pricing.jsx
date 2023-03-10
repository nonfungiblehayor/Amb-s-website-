import React from 'react';
import style from '../App.module.scss';
import Startup from './packages/startup';
import Pro from './packages/pro';
import Regular from './packages/regular';

function Pricing() {
    return <section className={style.pricingSection}>
        <h2>
        Our package and pricing
        </h2>
        <div className={style.pkgType}>
            <Startup />
            <Pro />
            <Regular />
        </div>
    </section>
}
export default Pricing