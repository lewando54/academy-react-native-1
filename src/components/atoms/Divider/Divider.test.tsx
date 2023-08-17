import React from 'react'
import * as renderer from 'react-test-renderer'
import Divider from './Divider'

describe('Divider', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Divider testId='divider'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render with optional text', () => {
    const tree = renderer.create(<Divider testId='divider' text='Hello World!' />)
    expect(tree).toMatchSnapshot()
  })

  it('should not render text by default', () => {
    const tree = renderer.create(<Divider testId='divider' />)
    expect(tree).toMatchSnapshot()
  })
})
