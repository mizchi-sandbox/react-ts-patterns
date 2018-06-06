import { applyMiddleware, createStore } from "redux"
import loggerMiddleware from "redux-logger"
import thunkMiddleware, { ThunkAction } from "redux-thunk"

const INCREMENT = "counter/increment"

type Increment = {
  type: typeof INCREMENT
}

export function increment(): Increment {
  return {
    type: INCREMENT
  }
}

export function incrementAsync(): ThunkAction<any, any, any, Increment> {
  return dispatch => {
    dispatch(increment())
  }
}

type Action = Increment

// state
export type State = {
  value: number
}

const initialState: State = {
  value: 0
}

const counter = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        value: state.value + 1
      }
    }
    default: {
      return state
    }
  }
}

const store = createStore(
  counter,
  applyMiddleware(loggerMiddleware, thunkMiddleware)
)

export default store
