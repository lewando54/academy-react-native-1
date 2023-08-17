import * as renderer from 'react-test-renderer'
import TextWithLink from './TextWithLink'
import { fireEvent, render } from '@testing-library/react-native'
import { MemoryRouter, Route, Routes } from 'react-router-native'
import { Text } from 'react-native'

describe('Text With Link', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<MemoryRouter><TextWithLink paragraphText='test' anchorText='click me' href='/' testId='test' anchorTagTestId='atest' /></MemoryRouter>)
    expect(tree).toMatchSnapshot()
  })

  it('should render paragraphText correctly', () => {
    const { getByText } = render(<MemoryRouter><TextWithLink paragraphText='testingP' anchorText='click me' href='/' testId='test' anchorTagTestId='atest' /></MemoryRouter>)
    expect(getByText('testingP')).toBeTruthy()
  })

  it('should render anchor tag text correctly', () => {
    const { getByText } = render(<MemoryRouter><TextWithLink paragraphText='testingP' anchorText='click me' href='/' testId='test' anchorTagTestId='atest' /></MemoryRouter>)
    expect(getByText('click me')).toBeTruthy()
  })

  it('should navigate in app properly after click', () => {
    const href = '/test'
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<TextWithLink paragraphText='testingP' anchorText='click me' href='/test' testId='test' />} />
          <Route path='/test' element={<Text>Correct!</Text>} />
        </Routes>
    </MemoryRouter>
    )

    fireEvent.press(getByText('click me'))

    expect(getByText('Correct!')).toBeTruthy()
  })
})
