import Taro, {Component} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'

import './BaseNav.scss'

class BaseNav extends Component {

  static defaultProps = {
    top: {
      title: '标题',
      bgColor: '#f5f5f5',
      color: '#000',
      showBack: true
    }
  }

  componentWillMount() {
    Taro.getSystemInfo({
      success: res => {
        global.barHeight = res.statusBarHeight;
        console.log(res.statusBarHeight, global, 8899)
      }
    })
  }

  goBack() {
    Taro.navigateBack();
  }

  render() {
    const {title, bgColor, color, showBack} = this.props.top ? this.props.top : this.state.top;
    const barStyle = {
      paddingTop: `${global.barHeight}px`,
      backgroundColor: bgColor,
      color
    }
    return (
      <View className="navigation">
        <View className="bar" style={barStyle}>
          {showBack ? <View className="back" onClick={this.goBack}>返回</View> : ''}
          <Text className="title">{title}</Text>
        </View>
        <View className="placeholder" style={barStyle}></View>
      </View>
    )
  }
}

export default BaseNav