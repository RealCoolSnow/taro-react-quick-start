import { Component } from 'react'
import { View, Text, Navigator, Button, ITouchEvent } from '@tarojs/components'
import { connect } from 'react-redux'
import Logo from '@/components/Logo'
import { showAlert } from '@/utils/util'
import Counter from '@/components/Counter'
import Language from '@/components/Language'
import { RootState, Dispatch } from '@/store/index'
import { helloGet } from '@/service/api'
import './index.scss'

const mapState = (state: RootState) => ({
  common: state.common
})

const mapDispatch = (dispatch: Dispatch) => ({
  setLanguage: dispatch.common.setLanguage
})

type StateProps = ReturnType<typeof mapState>
type DispatchProps = ReturnType<typeof mapDispatch>
type Props = StateProps & DispatchProps

const Index = (props: Props) => {
  const onClickHello = (event: ITouchEvent): void => {
    showAlert('hello', `${new Date().valueOf()}:${event.type}`)
  }
  const onHttpTest = () => {
    helloGet()
      .then(res => {
        console.log(res)
        showAlert('httpTest', res)
      })
      .catch(err => {
        console.log(err)
        showAlert('httpTest', err)
      })
  }
  const onSwitchLanguage = () => {
    props.setLanguage(props.common.language == 'en' ? 'cn' : 'en')
  }
  return (
    <View className='flex flex-col items-center px-4 py-1'>
      <Text className='mt-1' onClick={onClickHello}>
        Hello world!
      </Text>
      <View className='mt-1'>
        <Logo />
      </View>
      <Button className='mt-1 w-full' type='primary' onClick={onSwitchLanguage}>
        language: {props.common.language}
      </Button>
      <Language />
      <Counter />
      <Navigator className='mt-1 w-full' url='/pages/about/index'>
        <Button className='w-full bg-primary text-red'>Show About</Button>
      </Navigator>
      <Navigator className='mt-1 w-full' url='/pages/hook-demo/index'>
        <Button className='w-full'>Hook Demo</Button>
      </Navigator>

      <Button onClick={onHttpTest} className='mt-1 w-full'>
        Http Test
      </Button>
    </View>
  )
}

export default connect(mapState, mapDispatch)(Index)
