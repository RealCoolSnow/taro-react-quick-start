import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CommonState } from './types'

const initialState: CommonState = {
  language: 'en'
}

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLanguage: (state: CommonState, action: PayloadAction<string>) => {
      state.language = action.payload
    }
  }
})

export const commonActions = commonSlice.actions
export const commonReducer = commonSlice.reducer
