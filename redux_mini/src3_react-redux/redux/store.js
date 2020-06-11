// import {createStore} from 'redux'
import {createStore} from '../libs/redux'

import reducers from './reducers'

const store = createStore(reducers) // 内部会第一次调用reduer函数得到初始state

export default store