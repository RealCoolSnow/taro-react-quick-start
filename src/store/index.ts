import { combineReducers, configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { commonReducer } from './common'
import { counterReducer } from './counter'
import { isDebug } from '../config'

const rootReducer = combineReducers({
  common: commonReducer,
  counter: counterReducer
})

const makeStore = () => {
  const middleware = isDebug ? [logger] : []
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ thunk: true }).concat(middleware),
    devTools: isDebug
  })
  return store
}

const store = makeStore()

export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch
export default store
