import path from 'path'

const config = {
  projectName: 'taro-react-quick-start',
  date: '2021-3-31',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  alias: {
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
    '@/service': path.resolve(__dirname, '..', 'src/service'),
    '@/store': path.resolve(__dirname, '..', 'src/store'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
    '@/pages': path.resolve(__dirname, '..', 'src/pages')
  },
  plugins: [
    [
      'taro-plugin-tailwind',
      {
        // 具体参数见：https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts#L10
      }
    ]
  ],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {}
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
