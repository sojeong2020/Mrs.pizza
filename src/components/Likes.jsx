import React from 'react';
import {useState} from 'react';

const Likes = () => {
const [count, setCount] =useState(0);

    return (
        <div>
        <section>

        <h2>count: {count}</h2>

        <button onClick={()=> 
        setCount((currCount)=>{
        return currCount + 1;
        })}
        >
        Like 👍
        </button>
        
        </section>
        </div>
    );
};

export default Likes;