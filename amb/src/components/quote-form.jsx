import React from 'react';
import style from '../App.module.scss';

function Quoteform(props) {
    return <div className={style.eachInfo}>
        <label>{props.tag}</label>
        <input type={props.type} placeholder={props.holder}></input>
    </div>
}
export default Quoteform