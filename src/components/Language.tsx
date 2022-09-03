import { Button } from '@tarojs/components'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch, RootState } from '@/store'
import { commonActions } from '@/store/common'

const Language = () => {
  const language = useSelector((state: RootState) => state.common.language)
  const dispatch = useDispatch<Dispatch>()
  return (
    <>
      <Button
        className='mt-1 w-full'
        type='primary'
        onClick={() =>
          dispatch(commonActions.setLanguage(language == 'en' ? 'cn' : 'en'))
        }
      >
        Language(Hook):{language}
      </Button>
    </>
  )
}

export default Language
