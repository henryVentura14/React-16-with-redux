import { BUY, RETURN } from '../config/variables'
const buy_action = cant => {
  return {
    type: BUY,
    payload: cant
  }
}
const return_action = cant => {
  return {
    type: RETURN,
    payload: cant
  }
}
export { buy_action, return_action }
