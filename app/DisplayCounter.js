"use client"
import React from 'react'
import { useSelector } from 'react-redux'

function DisplayCounter() {
    const count = useSelector((state) => state.counter.value)

  return ( 
    <div className='m-1'>
        <span className='border-solid border-2 border-red-300 rounded p-1  '>{count}</span>
    </div>
)
}

export default DisplayCounter