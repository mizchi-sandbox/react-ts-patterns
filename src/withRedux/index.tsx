import * as React from "react"
import * as ReactDOM from "react-dom"
import { connect, Provider } from "react-redux"
import { applyMiddleware, createStore } from "redux"
import App from "./App"
import store from "./store"

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
