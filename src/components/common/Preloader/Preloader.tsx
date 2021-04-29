import preloader from './../../../preloader.svg';
import React from 'react';

let Preloader = () => {
    return <div style={ {background: "white"}}>
    <img src={preloader} />
    </div>
}

export default Preloader