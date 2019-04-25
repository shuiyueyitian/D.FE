import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import BaseNav from '../../components/baseNav.js'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页6'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <BaseNav></BaseNav>
        <View className='index'>
          <Text>中国工商银行</Text>
        </View>
      </View>
    )
  }
}
