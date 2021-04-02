export type CounterState = number

export const counter = {
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
}
