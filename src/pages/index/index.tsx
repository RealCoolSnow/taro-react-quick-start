import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Logo from '../../components/Logo'
import './index.less'

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='flex flex-col items-center'>
        <Text>Hello world!</Text>
        <Logo />
        <Button className='mt-2 w-full'>hello</Button>
      </View>
    )
  }
}
