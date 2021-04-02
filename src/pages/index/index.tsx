import { Component } from 'react'
import { View, Text, Navigator, Button, ITouchEvent } from '@tarojs/components'
import { connect } from 'react-redux'
import Logo from '../../components/Logo'
import { showAlert } from '../../utils/util'
import './index.less'
import Counter from '../../components/Counter'
import { RootState, Dispatch } from '../../store'
import { helloGet } from '../../service/api'

const mapState = (state: RootState) => ({
  common: state.common
})

const mapDispatch = (dispatch: Dispatch) => ({
  setLanguage: dispatch.common.setLanguage
})

type StateProps = ReturnType<typeof mapState>
type DispatchProps = ReturnType<typeof mapDispatch>
type Props = StateProps & DispatchProps

class Index extends Component<Props> {
  private handleClickHello(event: ITouchEvent): void {
    showAlert('hello', `${new Date().valueOf()}:${event.type}`)
  }
  private httpTest() {
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
  render() {
    return (
      <View className='flex flex-col items-center px-4 py-1'>
        <Text className='mt-1' onClick={this.handleClickHello.bind(this)}>
          Hello world!
        </Text>
        <View className='mt-1'>
          <Logo />
        </View>
        <Navigator className='mt-1 w-full' url='/pages/about/index'>
          <Button className='w-full'>Show About</Button>
        </Navigator>
        <Navigator className='mt-1 w-full' url='/pages/hook-demo/index'>
          <Button className='w-full'>Hook Demo</Button>
        </Navigator>
        <Button
          className='mt-1'
          onClick={() => {
            this.props.setLanguage(
              this.props.common.language == 'en' ? 'cn' : 'en'
            )
          }}
        >
          language: {this.props.common.language}
        </Button>
        <Button onClick={this.httpTest.bind(this)} className='mt-1'>
          Http Test
        </Button>
        <Counter />
      </View>
    )
  }
}

export default connect(mapState, mapDispatch)(Index)
