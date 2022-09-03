const isDebug = process.env.NODE_ENV !== 'production'
const baseUrl = isDebug
  ? 'https://app.joy666.cn/api'
  : 'https://url.production/api'

export { isDebug, baseUrl }
