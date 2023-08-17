/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react'

import Heading from './Heading'
import { create } from 'react-test-renderer'

const meta = {
    component: Heading,
    argTypes: {
        level: { control: 'select', options: [1, 2, 3, 4, 5, 6] },
        children: { control: 'text' }
    }
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'This is a heading',
        level: 1,
        testId: 'test'
    }
}