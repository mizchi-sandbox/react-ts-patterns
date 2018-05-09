import { applyMiddleware, createStore } from "redux"
import loggerMiddleware from "redux-logger"
import thunkMiddleware from "redux-thunk"
import rootReducer from "../reducers"

export default () => {
  return createStore(
    rootReducer,
    applyMiddleware(loggerMiddleware, thunkMiddleware)
  )
}
