import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {moviesReduser} from './genres'

const rootReducer = combineReducers({
  ganres:moviesReduser,
})
 const store = createStore(rootReducer, composeWithDevTools(
   applyMiddleware(thunk)
   ))
 
 export default store;