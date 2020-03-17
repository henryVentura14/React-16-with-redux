// Reducers config
import { BUY, RETURN } from '../config/variables'
const initial_state_games = {
  game: 10
}

const gamesReducer = (state = initial_state_games, action) => {
  switch (action.type) {
    case BUY: {
      return {
        ...state,
        game: state.game - action.payload
      }
    }
    case RETURN: {
      return {
        ...state,
        game: state.game + action.payload
      }
    }
    default:
      return state
  }
}
export default gamesReducer
