import { View, Text, Button } from '@tarojs/components'
import React, { useEffect, useState } from 'react'

const HookComponent = () => {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(0)

  useEffect(() => {
    console.log('effect call')
    return () => {
      console.log('effect clean')
    }
  }, [count])

  return (
    <View>
      <Text className='text-base'>
        You clicked {count} times, current time {time}
      </Text>
      <Button onClick={() => setCount(count + 1)} className='mt-2'>
        Click me
      </Button>
      <Button onClick={() => setTime(new Date().valueOf())} className='mt-2'>
        Get Time
      </Button>
    </View>
  )
}

export default class HookDemo extends React.Component {
  render() {
    return (
      <View className='flex flex-col items-center'>
        <HookComponent />
      </View>
    )
  }
}
