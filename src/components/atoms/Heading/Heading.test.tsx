import React from 'react'
import * as renderer from 'react-test-renderer'
import Heading from './Heading'

describe('Heading', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Heading testId='heading'>Testing</Heading>)
    expect(tree).toMatchSnapshot()
  })

  it('should render innerHTML', () => {
    const tree = renderer.create(<Heading testId='heading'>Testing</Heading>)
    expect(tree).toMatchSnapshot()
  })

  it('should render <h1> tag by default', () => {
    const tree = renderer.create(<Heading testId='heading'>Testing</Heading>)
    expect(tree).toMatchSnapshot()
  })

  it('should render <h1> tag', () => {
    const tree = renderer.create(<Heading level={1} testId='heading'>Testing</Heading>)
    expect(tree).toMatchSnapshot()
  })

  it('should render <h2> tag', () => {
    const tree = renderer.create(<Heading level={2} testId='heading'>Testing</Heading>)
    expect(tree).toMatchSnapshot()
  })

  it('should render <h3> tag', () => {
    const tree = renderer.create(<Heading level={3} testId='heading'>Testing</Heading>)
    expect(tree).toMatchSnapshot()
  })

  it('should render <h4> tag', () => {
    const tree = renderer.create(<Heading level={4} testId='heading'>Testing</Heading>)
    expect(tree).toMatchSnapshot()
  })

  it('should render <h5> tag', () => {
    const tree = renderer.create(<Heading level={5} testId='heading'>Testing</Heading>)
    expect(tree).toMatchSnapshot()
  })

  it('should render <h6> tag', () => {
    const tree = renderer.create(<Heading level={6} testId='heading'>Testing</Heading>)
    expect(tree).toMatchSnapshot()
  })
})
