import { configureStore,  createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';


const counterSlice = createSlice({
  name: 'counterSlice', // This field represent the slice name
  initialState: {value: 0},
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.step
    }
  }
})

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})

function Counter()
{
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.value
  })

  return (
    <div>
      <button onClick={() => {
        dispatch({type: 'counterSlice/up', step: 2})
      }}>+</button> {count}
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter/>
      </div>
    </Provider>
  )
}

export default App
