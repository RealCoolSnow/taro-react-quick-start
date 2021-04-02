import { Button, View } from '@tarojs/components'
import React from 'react'
import { connect } from 'react-redux'
import { Dispatch, RootState } from '../store'

const mapState = (state: RootState) => ({
  counter: state.counter
})

const mapDispatch = (dispatch: Dispatch) => ({
  inc: () => dispatch.counter.inc,
  dec: () => dispatch.counter.dec
})

type StateProps = ReturnType<typeof mapState>
type DispatchProps = ReturnType<typeof mapDispatch>
type Props = StateProps & DispatchProps

class Counter extends React.Component<Props> {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <View>
        <Button onClick={this.props.inc}>
          click me {this.props.counter.num}
        </Button>
      </View>
    )
  }
}

export default connect(mapState, mapDispatch)(Counter)
