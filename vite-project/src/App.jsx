import React, { useState } from 'react'
import { createStore } from 'redux'
import { Provider, useDispatch, useSelector } from 'react-redux'


// 1. set Action
const ACTION_INCREASE = 'ACTION_INCREASE'
const ACTION_DECREASE = 'ACTION_DECREASE'
const ACTION_RESET = 'ACTION_RESET'

// 2. set InitialState
const initialState = {
  count: 0
}

// 3. set reducer
const countReducer = (state = initialState, action) => {
  console.log(`useReducer state = ${state}`)
  console.log(`action = ${action}`)
  switch(action.type)
  {
    case ACTION_INCREASE:
      return {...state, count: state.count + action.payload}
    case ACTION_DECREASE:
      return {...state, count: state.count - action.payload}
    case ACTION_RESET:
      return {...state, count: action.payload}
    default:
      return state
  }
}

// 4. Push the Reducer and the initialState to the Store.
// const store = createStore(countReducer, initialState)
const store = createStore(countReducer)
// 5. Create the dispatch functions
const Increase = () =>
{
  const dispatch = useDispatch()
  const increase = () =>
  {
    dispatch({type: ACTION_INCREASE, payload: 1})
  }

  return (
    <div>
       <button onClick={increase}>Increase</button>
    </div>
  )
}

const Decrease = () =>
{
  const dispatch = useDispatch()
  const decrease = () =>
  {
    dispatch({type: ACTION_DECREASE, payload: 1})
  }

  return (
    <div>
       <button onClick={decrease}>Decrease</button>
    </div>
  )
}

const Reset = () =>
{
  const dispatch = useDispatch()
  const reset = () =>
  {
    dispatch({type: ACTION_RESET, payload: 0})
  }

  return (
    <div>
       <button onClick={reset}>Reset</button>
    </div>
  )
}

const Result = () => {
  const count = useSelector((state) => state.count)
  return (
    <div>Result: {count}</div>
  )
}

const App = () => {

  return (
    <Provider store={store}>
      <Increase/>
      <Decrease/>
      <Reset/>
      <Result/>
    </Provider>
  )
}

export default App