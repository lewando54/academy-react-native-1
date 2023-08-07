import { Text } from 'react-native'
import headingStyle from './Heading.style'

export interface IHeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children?: React.ReactNode | string
  testId: string
}

function Heading ({ level = 1, children, testId }: IHeadingProps): React.ReactElement {
  return (
    <Text testID={testId} style={[
        headingStyle.base,
        {fontSize: 16 / (level / 2) + 6}
        ]}>
      {children}
    </Text>
  )
}

export default Heading