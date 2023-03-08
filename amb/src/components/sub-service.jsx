import React from 'react';
import style from '../App.module.scss';

function Subservice(props) {
    return <div className={style.subSecDiv1}>
            <img src={props.pfp0} alt='pfp'></img>
            <p>
                {props.txt0}
            </p>
            <span>
                {props.span0}
            </span>
        </div>
}
export default Subservice