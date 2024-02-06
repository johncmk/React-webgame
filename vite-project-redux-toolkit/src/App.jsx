import { configureStore,  createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';


const counterSlice = createSlice({
  name: 'counterSlice', // This field represent the slice name
  initialState: {value: 0},
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload // action.payload is '2'
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
        dispatch(counterSlice.actions.up(2))
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
