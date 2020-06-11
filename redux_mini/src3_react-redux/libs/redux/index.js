
export function createStore(reducer) {
  let state
  const listeners = []
  state = reducer(state, {type: '@@mini-redux/INIT'})

  function getState() {
    return state
  }

  
  function dispatch(action) {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  
  function subscribe(listener) {
    listeners.push(listener)
  }

  return {getState, dispatch, subscribe}
}

export const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((preState, key) => {
      preState[key] = reducers[key](state[key], action)
      return preState
    }, {})
  }
}
