import React from 'react';

const SnowFlake = (props) => {
    return ( 
        <p className="SnowFlake" id={`item${props.id}`} style={props.style}>*</p>
     );
}
 
export default SnowFlake;