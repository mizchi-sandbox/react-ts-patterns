import { combineReducers } from "redux"
import counter, { State as CounterState } from "./counter"

export type State = {
  counter: CounterState
}

export default combineReducers({
  counter
})
