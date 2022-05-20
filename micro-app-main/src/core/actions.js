import { initGlobalState } from 'qiankun'

const initialState = {
  original: '这是原始数据~~'
}
const actions = initGlobalState(initialState)

export default actions
