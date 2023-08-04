import { createStore, compose, combineReducers } from 'redux'
// import { combineReducers, legacy_createStore } from 'redux'

import { toyReducer } from './reducers/toy.reducer'

const mainReducer = combineReducers({
  toyModule: toyReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(mainReducer, composeEnhancers())



// const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
//     : undefined
// export const store = legacy_createStore(rootReducer, middleware)

