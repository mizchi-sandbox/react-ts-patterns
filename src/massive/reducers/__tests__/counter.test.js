import assert from 'assert'
import counter, { add, increment } from '../counter'

test('counter/add', () => {
  const initilaState = counter(undefined, {})
  assert(initilaState.value === 0)
  const add3 = add(3)
  const ret = counter(initilaState, add3)
  assert(ret.value === 3)
})

test('counter/increment', () => {
  const initilaState = counter(undefined, {})
  assert(initilaState.value === 0)
  const inc = increment()
  const ret = counter(initilaState, inc)
  assert(ret.value === 1)
})
