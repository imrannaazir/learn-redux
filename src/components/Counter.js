import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/states/counter/counter.slice';
import "../styles/Counter.css"

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div className='counter'>
            <h1>Counter</h1>
            <h1>{count}</h1>
            <div className='btn-grp'>
                <button
                    onClick={() => dispatch(increment())}
                    className='btn'>Increase</button>
                <button
                    onClick={() => dispatch(decrement())}
                    className='btn'>Decrease</button>
            </div>
            <input type="number" name="" id="" />
            <button className='btn'>Set</button>
        </div>
    );
};

export default Counter;