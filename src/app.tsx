import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store/index'
import 'windi.css'
import './app.less'

class App extends React.Component {
  componentDidMount() {
    console.log('app created')
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  render() {
    return (
      <React.StrictMode>
        <Provider store={store}>{this.props.children}</Provider>
      </React.StrictMode>
    )
  }
}

export default App
