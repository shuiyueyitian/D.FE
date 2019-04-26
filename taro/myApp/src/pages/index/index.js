import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import BaseNav from '../../components/baseNav'

import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页',
    // navigationBarTextStyle: 'white',
  }

  state = {
    title: '测试一下'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <BaseNav>
          <View>
            <View className='tools'>
              <View className='title'>{title}</View>
            </View>
          </View>
        </BaseNav>
        <View className='index'>
          <Text>中国工商</Text>
        </View>
      </View>
    )
  }
}
