import { Dispatch, RootState } from '@/store'
import { asyncAddNumber } from '@/store/counter/thunk'
import { Button } from '@tarojs/components'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
  const counter = useSelector((state: RootState) => state.counter.n)
  const dispatch = useDispatch<Dispatch>()
  return (
    <>
      <Button
        onClick={() => dispatch(asyncAddNumber(1))}
        className='mt-1 w-full'
        type='warn'
      >
        click me - {counter}
      </Button>
      {/* <Button onClick={this.props.dec}>dec-{this.props.counter}</Button> */}
    </>
  )
}

export default Counter
