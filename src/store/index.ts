import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({})

const store: (initialState?: any) => any = initialState => {
  const middlewares = composeWithDevTools(applyMiddleware(thunkMiddleware))
  return createStore(reducers, initialState, middlewares)
}

export default store
