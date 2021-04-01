import { Component } from 'react'
import { Image } from '@tarojs/components'
import logoImg from '../assets/logo.jpg'

export default class Logo extends Component {
  render() {
    return <Image src={logoImg} className='w-24 h-24' />
  }
}
