import { Button, View } from '@tarojs/components'
import React from 'react'
import { connect } from 'react-redux'
import { add, minus } from '../store/actions/counter'

interface IProps {
  num: number
  increment: () => void
  decrement: () => void
}

const mapStateToProps = (state: any) => {
  return {
    num: state.counter.num
  }
}
const mapDispatchToProps = (dispatch: any) => ({
  increment: () => dispatch(add),
  decrement: () => dispatch(minus)
})

@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class Counter extends React.Component<IProps> {
  public componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <View>
        <Button onClick={this.props.increment}>
          click me {this.props.num}
        </Button>
      </View>
    )
  }
}
