import { createStore, compose } from 'redux'
// import thunkMiddleware from 'redux-thunk'

// import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(composeEnhancers(
  // applyMiddleware(thunkMiddleware)
))

export const dispatch = store.dispatch
export const getState = store.getState
export default store