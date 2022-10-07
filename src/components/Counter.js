import React from 'react';
import "../styles/Counter.css"

const Counter = () => {
    return (
        <div className='counter'>
            <h1>Counter</h1>
            <h1>0</h1>
            <div className='btn-grp'>
                <button className='btn'>Increase</button>
                <button className='btn'>Decrease</button>
            </div>
            <input type="number" name="" id="" />
            <button className='btn'>Set</button>
        </div>
    );
};

export default Counter;