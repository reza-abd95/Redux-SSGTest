"use client"
import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import Counter from './counter'
import DisplayCounter from './DisplayCounter'

function MainCouter() {
  return (
    <Provider store={store}>
      <DisplayCounter/>
      <Counter/>
    </Provider>  
  )
}

export default MainCouter