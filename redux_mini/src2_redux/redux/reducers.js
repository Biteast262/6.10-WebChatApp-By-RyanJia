//Module with reducer functions
 
import {combineReducers} from 'redux'
// import {combineReducers} from '../libs/redux'

import {INCREMENT, DECREMENT, ADD_MSG} from './action-types'

function count(state = 0, action) {

  console.log('counter()', state, action)
  switch (action.type) {
    case INCREMENT:
      return state + action.data
    case DECREMENT:
      return state - action.data
    default:
      return state
  }
}

const initMsgs = []

function msgs(state = initMsgs, action) {
  console.log('msgs()', state, action)
  switch (action.type) {
    case ADD_MSG:
      return [action.data, ...state]
    default:
      return state
  }
}

export default combineReducers({
  count,
  msgs
})