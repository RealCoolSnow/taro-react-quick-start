import { store } from '../../store'
import config from '../../config'

const baseUrl = config.baseUrl

const fullUrl = (url: string, params?: { [key: string]: any }) => {
  let a = `${baseUrl}/${url}`
  let lang = store.getState().common.language
  if (!a.includes('?')) a += '?'
  a += `lang=${lang}`
  if (params) {
    Object.keys(params).forEach((key, index) => {
      a += `&${key}=${params[key]}`
    })
  }
  a += `&_=${new Date().valueOf()}`
  return a
}

export { fullUrl }
