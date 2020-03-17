import { combineReducers } from 'redux'
import gamesReducer from './shopGamesReducer'
import searchResultReducer from './searchResultReducer'

const rootReducers = combineReducers({
  gamesReducer,
  searchResultReducer
})

export default rootReducers;