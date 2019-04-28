import Taro, {Component} from '@tarojs/taro';
import {View, Text} from '@tarojs/components';
import BaseNav from '../../components/baseNav';

class List extends Component {
  state = {
    
  }

  render() {
    return (
      <View>
        <BaseNav />
        <Text>这是列表页</Text>
      </View>
    )
  }
}