import { createStore, applyMiddleware, combineReducers } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import {
    latestArticlesReducer, 
    selectedArticlesReducer  
} from './reducers/latestArticlesReducers'


const rootReducer = combineReducers({   
   latestArticles: latestArticlesReducer, 
   selectedArticles: selectedArticlesReducer 
})

const store = createStore(
   rootReducer,
   {},
   composeWithDevTools(applyMiddleware(thunk))
)

export default store
