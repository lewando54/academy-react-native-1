/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react'

import Divider from './Divider'
import { create } from 'react-test-renderer'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Divider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    text: { control: 'text' }
  }
} satisfies Meta<typeof Divider>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta
type Story = StoryObj<typeof meta>

export const WithText: Story = {
    args: {
        text: 'Divider text',
        testId: 'story'
    }
}

export const WithoutText: Story = {
    args: {
        text: '',
        testId: 'story'
    }
}
// More on args: https://storybook.js.org/docs/react/writing-stories/args
