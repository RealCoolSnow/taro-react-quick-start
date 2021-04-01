import { Component } from 'react'
import { View, Text, Navigator, Button, ITouchEvent } from '@tarojs/components'
import Logo from '../../components/Logo'
import './index.less'
import { showAlert } from '../../utils/util'

export default class Index extends Component {
  private handleClickHello(event: ITouchEvent): void {
    showAlert('hello', `${new Date().valueOf()}:${event.type}`)
  }
  render() {
    return (
      <View className='flex flex-col items-center p-2'>
        <Text className='mt-2' onClick={this.handleClickHello.bind(this)}>
          Hello world!
        </Text>
        <View className='mt-2'>
          <Logo />
        </View>
        <Navigator className='mt-2 w-full' url='/pages/about/index'>
          <Button className='w-full'>Show About</Button>
        </Navigator>
        <Navigator className='mt-2 w-full' url='/pages/hook-demo/index'>
          <Button className='w-full'>Hook Demo</Button>
        </Navigator>
      </View>
    )
  }
}
