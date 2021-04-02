import { createModel } from '@rematch/core'
import { RootModel } from '.'

export type CounterState = number

export const counter = createModel<RootModel>()({
  state: 0,
  reducers: {
    SET_NUMBER: (state: CounterState, payload: number) => {
      return state + payload
    }
  },
  effects: dispatch => ({
    async inc(payload: number) {
      dispatch.counter.SET_NUMBER(payload)
    }
  })
})
