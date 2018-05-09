import * as React from "react"
import * as ReactDOM from "react-dom"
import { connect, Provider } from "react-redux"
import { applyMiddleware, createStore } from "redux"
import store from "./store"

const StoreContext = React.createContext("store")

class StoreProvider extends React.Component {
  public state: { theme: string } = { theme: "light" }
  public render() {
    return (
      <StoreContext.Provider value={this.state.theme}>
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}

export default () => {
  return (
    <StoreProvider>
      <StoreContext.Consumer>{val => <div>{val}</div>}</StoreContext.Consumer>
    </StoreProvider>
  )
}
