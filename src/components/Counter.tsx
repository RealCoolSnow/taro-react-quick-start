import { Button } from '@tarojs/components'
import React from 'react'
import { connect } from 'react-redux'
import { Dispatch, RootState } from '../store'

const mapState = (state: RootState) => ({
  counter: state.counter
})

const mapDispatch = (dispatch: Dispatch) => ({
  inc: () => dispatch.counter.inc(1),
  dec: () => dispatch.counter.inc(-1)
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
      <>
        <Button onClick={this.props.inc}>
          click me - {this.props.counter}
        </Button>
        {/* <Button onClick={this.props.dec}>dec-{this.props.counter}</Button> */}
      </>
    )
  }
}

export default connect(mapState, mapDispatch)(Counter)
