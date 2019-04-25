import Taro from '@tarojs/taro'

export default {
  namespace: 'user',
  state: {
    systemInfo: {}
  },
  async setup({put}) {
    Taro.getSystemInfo().then(systemInfo => {
      put({type: 'update', payload: {systemInfo}})
    })
  }
}