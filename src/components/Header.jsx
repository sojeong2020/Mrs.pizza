import React from 'react';
import {useState} from 'react';

const Header = () => {
    const [count, setCount] =useState(0);

    return (
        <div>
            <span>{count}</span>
            <button onClick={()=>{setCount((currCount)=>{
                return currCount + 1;
            })}}>
            👍</button>
            <h1>Mrs. Pizza </h1>
        </div>
    );
};

export default Header;