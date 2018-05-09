// Action

const ADD = "counter/add"
const INCREMENT = "counter/increment"

type Add = {
  type: typeof ADD
  payload: {
    amount: number
  }
}

type Increment = {
  type: typeof INCREMENT
}

type Action = Add | Increment

// Action Creator
export function add(amount: number): Add {
  return {
    type: ADD,
    payload: {
      amount
    }
  }
}

export function increment(): Increment {
  return {
    type: INCREMENT
  }
}

// state
export type State = {
  value: number
}

const initialState: State = {
  value: 0
}

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ADD: {
      return {
        ...state,
        value: state.value + action.payload.amount
      }
    }
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
