import * as React from "react"
import { connect } from "react-redux"
import { increment, State } from "./store"

// connect
const mapStateToProps = (state: State) => {
  return {
    value: state.value
  }
}

type Props = {
  value: number
  increment(): void
}

export default connect(mapStateToProps, { increment })((props: Props) => {
  return (
    <div>
      <h1>Counter: Simple</h1>
      <div>
        value: {props.value}
        <button onClick={_ => props.increment()}>inc</button>
      </div>
    </div>
  )
})
