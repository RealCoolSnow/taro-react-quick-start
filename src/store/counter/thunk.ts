import { Dispatch } from '@reduxjs/toolkit'
import { counterActions } from '.'

export const asyncAddNumber = (n: number) => (dispatch: Dispatch) => {
  setTimeout(() => {
    dispatch(counterActions.addNumber(n))
  }, 200)
}
