'use client';

import {  useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './slice';

export default function Counter() {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button className='border-solid border-2 border-slate-400 rounded p-1 m-1' onClick={() => dispatch(increment())}>Increment</button>
        <button className='border-solid border-2 border-slate-400 rounded p-1 m-1' onClick={() => dispatch(decrement())}>Decrement</button>
        <button className='border-solid border-2 border-slate-400 rounded p-1 m-1' onClick={() => dispatch(incrementByAmount(5))}>
          increament by amount
        </button>
      </div>
    </div>
  );
}
