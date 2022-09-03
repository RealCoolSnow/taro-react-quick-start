import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CounterState } from './types'

const initialState: CounterState = { n: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setNumber: (state: CounterState, action: PayloadAction<number>) => {
      state.n += action.payload
    }
  }
})

export const counterActions = counterSlice.actions
export const counterReducer = counterSlice.reducer
