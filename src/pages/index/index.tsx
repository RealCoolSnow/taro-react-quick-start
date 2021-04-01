import { Component } from 'react'
import { View, Text, Navigator, Button } from '@tarojs/components'
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
      <View className='flex flex-col items-center p-2'>
        <Text className='mt-2'>Hello world!</Text>
        <View className='mt-2'>
          <Logo />
        </View>
        <Navigator className='mt-2 w-full' url='/pages/about/index'>
          <Button className='w-full'>Show About</Button>
        </Navigator>
      </View>
    )
  }
}
