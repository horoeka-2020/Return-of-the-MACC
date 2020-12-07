import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import songsReducer from '../reducers/songs'
// import thunkMiddleware from 'redux-thunk'

// import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({
    songs: songsReducer,
    artists: artistsReducer
  })
  ),
    // composeEnhancers(applyMiddleware(thunk))
    // applyMiddleware(thunkMiddleware)

// export const dispatch = store.dispatch
// export const getState = store.getState
export default store