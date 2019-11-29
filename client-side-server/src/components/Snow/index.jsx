import React from 'react';
import SnowFlake from './SnowFlake';
import snow from './generateSnow';
import './styles.css';

const SnowEffect = (props) => {
    return (
        props.isSnowing ?
            <div className="Snow">{snow(SnowFlake)}</div> :
            <div className="Snow"></div>
    );
}

export default SnowEffect;
