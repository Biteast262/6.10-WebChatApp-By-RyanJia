import {createStore} from 'redux'
// import {createStore} from '../libs/redux'

import reducers from './reducers'

const store = createStore(reducers) 

export default store