const isDebug = process.env.NODE_ENV !== 'production'

export default {
  isDebug,
  baseUrl: isDebug ? 'https://app.joy666.cn/api' : 'https://url.production/api',
}
