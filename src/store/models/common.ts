export type CommonState = {
  language: string
}

export const common = {
  state: {
    language: 'en'
  } as CommonState,
  reducers: {
    SET_LANGUAGE(state, language: string) {
      return {
        ...state,
        language
      }
    }
  },
  effects: dispatch => ({
    async setLanguage(payload: string) {
      dispatch.common.SET_LANGUAGE(payload)
    }
  })
}
