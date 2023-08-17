/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react'
import { useState } from 'react'

import CheckboxWithLabel from './CheckboxWithLabel'
import { create } from 'react-test-renderer'

interface IMockupCheckboxProps {
    bgColor?: string 
    checkmarkColor?: string
    labelText: string
}

function StatefulCheckboxWithLabel({bgColor, checkmarkColor, labelText}: IMockupCheckboxProps) {
    let [checked, setChecked] = useState(false)

    return (
        <CheckboxWithLabel labelText={labelText} checked={checked} testId='test' bgColor={bgColor} checkmarkColor={checkmarkColor} onChange={(newValue) => {setChecked(newValue)}}/>
    )
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: StatefulCheckboxWithLabel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    bgColor: { control: 'color' },
    checkmarkColor: { control: 'color' },
    labelText: { control: 'text' }
  }
} satisfies Meta<typeof StatefulCheckboxWithLabel>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        bgColor: 'rgb(236, 72, 153)',
        checkmarkColor: '#fff',
        labelText: 'Check me'
    }
}
// More on args: https://storybook.js.org/docs/react/writing-stories/args
