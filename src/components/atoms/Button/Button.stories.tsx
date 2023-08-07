/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react'

import Button from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		color: { control: 'select', options: ['primary', 'secondary'] },
		onClick: { action: 'clicked' }
	}
} satisfies Meta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
// More on args: https://storybook.js.org/docs/react/writing-stories/args
	args: {
		color: 'primary',
		children: 'Button'
	}
}

export const Secondary: Story = {
	args: {
		color: 'secondary',
		children: 'Button'
	}
}