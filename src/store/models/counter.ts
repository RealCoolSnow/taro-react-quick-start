import { createModel } from '@rematch/core'
import { RootModel } from '.'

export type CounterState = number

export const counter = createModel<RootModel>()({
  state: 0,
  reducers: {
    setNumber: (state: CounterState, payload: number) => {
      return state + payload
    }
  },
  effects: dispatch => ({
    async inc(payload: number) {
      dispatch.counter.setNumber(payload)
    }
  })
})
