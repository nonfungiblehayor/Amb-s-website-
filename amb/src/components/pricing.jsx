import React from 'react';
import style from '../App.module.scss';
import Startup from './packages/startup';
import Pro from './packages/pro';
import Regular from './packages/regular';

function Pricing({showModal}) {
    return <section className={style.pricingSection}>
        <h2>
        Our package and pricing
        </h2>
        <div className={style.pkgType}>
            <Startup fnc={showModal}/>
             <Pro fnc={showModal}/>
           <Regular fnc={showModal}/>
        </div>
    </section>
}
export default Pricing