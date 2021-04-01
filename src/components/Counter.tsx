import { View } from '@tarojs/components'
import React from 'react'

export interface IProps {
  value: number
  onIncrement: () => void
  onDecrement: () => void
}
export default class Counter extends React.PureComponent<IProps> {
  public componentDidMount() {
    console.log(this.props)
  }
  render() {
    return <View>counter</View>
  }
}
