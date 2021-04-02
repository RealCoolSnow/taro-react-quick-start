import { Models } from '@rematch/core'
import { counter } from './counter'
import { common } from './common'

export interface RootModel extends Models<RootModel> {
  counter: typeof counter
  common: typeof common
}

export const models: RootModel = { counter, common }
