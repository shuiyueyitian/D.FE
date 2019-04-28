import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import BaseNav from '../../components/baseNav'

import './index.scss'

class Index extends Component {

  state = {
    top: {
      title: '首页title',
      bgColor: '#ff4949',
      color: '#fff',
      showBack: false
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goList() {
    Taro.navigateTo({
      url: '/pages/list/index'
    })
  }

  render () {
    let {top} = this.state;
    return (
      <View>
        <BaseNav top={top} />
        <View className='index'>
          <Text>这里正文部分</Text>
          <Button onClick={this.goList}>去列表页</Button>
        </View>
      </View>
    )
  }
}

export default Index;
