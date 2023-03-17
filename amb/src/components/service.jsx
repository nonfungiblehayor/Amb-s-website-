import React from 'react';
import style from '../App.module.scss';
import Subservice from './sub-service';
import Frame135 from '../images/Frame 135.webp';
import Group127 from '../images/Group 127.webp';
import Group126 from '../images/Group 126.webp';
import Frame355 from '../images/Frame 355.webp';
import Group132 from '../images/Group 132.webp';
import Group131 from '../images/Group 131.webp';

function Service() {
    return <section className={style.serviceSection} id='services'>
        <h2>
        Your Preferred SME Accountant and Tax Advisers in Nigeria
        </h2>
        <section className={style.subSec1}>
        <Subservice pfp0={Frame135} txt0='Accounting Services' span0='Creating accurate financial records to produce a comprehensive financial statement for in-depth analysis' />
        <Subservice pfp0={Group127} txt0='Tax Planning & Advisory' span0='Review of tax filings, guidance on tax reporting requirements and resolution of  disputes with tax authorities' />
        </section>
        <section className={style.subSec1}>
        <Subservice pfp0={Group126} txt0='Accounting System' span0='Designing customized financial templates to cater to your business requirements and produce precise financial records' />
        <Subservice pfp0={Frame355} txt0='Budget forecast & performance' span0='Creating your budget and evaluating its performance over time through in-depth analysis' />
        </section>
        <section className={style.subSec1}>
        <Subservice pfp0={Group132} txt0='Cashflow forecast and performance' span0='Forecasting of cash-related transactions and analysis of cash inflow and outflow of your business in its day-to-day operations' />
        <Subservice pfp0={Group131} txt0='Data Analysis & Projection' span0='Analysis of the financial data of your business to provide insights for informed decision-making' />
        </section>
    </section>
}
export default Service