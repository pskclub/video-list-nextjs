import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

const initState = {}

export const initStore = (initialState = initState) => {
	return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}