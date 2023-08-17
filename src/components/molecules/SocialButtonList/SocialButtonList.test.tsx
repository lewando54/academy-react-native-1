import React from 'react'
import { render } from '@testing-library/react-native'
import * as renderer from 'react-test-renderer'
import SocialButtonList, { TSocialsArray } from './SocialButtonList'

describe('SocialButtonList', () => {
  const socials: TSocialsArray = [
    { id: 0, color: '#e90800', icon: 'google', href: 'https://google.pl/' },
    { id: 1, color: '#4768aa', icon: 'facebook', href: 'https://google.pl/' },
    { id: 2, color: '#0068c1', icon: 'linkedin', href: 'https://google.pl/' }
  ]

  it('should render correctly', () => {
    const tree = renderer.create(<SocialButtonList socials={socials} testId='test'/>)
    expect(tree).toMatchSnapshot()
  })

  it('should render icons in list', () => {
    const { getByTestId } = render(<SocialButtonList socials={socials} testId='test'/>)
    expect(getByTestId('test0')).toBeTruthy()
    expect(getByTestId('test1')).toBeTruthy()
    expect(getByTestId('test2')).toBeTruthy()
  })
})
