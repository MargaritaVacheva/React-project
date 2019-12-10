import React from 'react';

const snow = (Comp) => {
    let animationDelay = '0s';
    let fontSize = '0px';
    let arr = Array.from('Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!!');

    return arr.map((sf, i) => {
        animationDelay = `${(Math.random() * 16).toFixed(2)}s`;
        fontSize = `${Math.floor((Math.random() * 10 + 20))}px`;
        let style = {
            animationDelay,
            fontSize
        }
        return <Comp key={i} id={i} style={style} />
    });
}

export default snow;