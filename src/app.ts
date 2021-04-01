import { Component } from 'react'
import { Provider } from 'react-redux'
import 'windi.css'
import './app.less'
import configStore from './store'

const store = configStore()

class App extends Component {
  componentDidMount() {
    console.log('app created')
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
