import * as React from 'react'
import * as renderer from 'react-test-renderer'
import App from '../App'

test('render <App/>', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
