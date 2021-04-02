import { createModel } from '@rematch/core'
import { RootModel } from '.'

export const counter = createModel<RootModel>()({
  state: {
    num: 0
  },
  reducers: {
    updateState(state, payload) {
      return {
        ...state,
        ...payload
      }
    }
  },
  effects: dispatch => ({
    async inc(payload, rootState) {
      this.updateState({
        num: rootState.common.num + 1
      })
    },
    async dec(payload, rootState) {
      this.updateState({
        num: rootState.common.num - 1
      })
    }
  })
})
