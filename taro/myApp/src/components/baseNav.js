import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
// import {connect} from '@tarojs/redux'

import './nav.scss'

// @connect(({user}) => ({
//   statusBarHeight: user.systemInfo.statusBarHeight,
// }))

class BaseNav extends Component {
  static defaultProps = {
    color: '#333',
    backgroundColor: '#f5f5f5',
  }

  componentWillMount() {
    Taro.getSystemInfo({
      success: res => {
        global.barHeight = res.statusBarHeight;
        console.log(res.statusBarHeight, global, 8899)
      }
    })
  }

  render() {
    const {backgroundColor, color} = this.props
    const barStyle = {
      paddingTop: `${global.barHeight}px`,
      backgroundColor,
      color,
    }
    return (
      <View className="navigation">
        <View className="bar" style={barStyle}>{this.props.children}</View>
        <View className="placeholder" style={barStyle}></View>
      </View>
    )
  }
}

export default BaseNav