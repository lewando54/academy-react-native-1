/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react'
import { useState } from 'react'

import Checkbox from './Checkbox'
import { create } from 'react-test-renderer'

interface IMockupCheckboxProps {
    bgColor?: string 
    checkmarkColor?: string
}

function Stateful({bgColor, checkmarkColor}: IMockupCheckboxProps) {
    let [checked, setChecked] = useState(false)

    return (
        <Checkbox checked={checked} testId='test' bgColor={bgColor} checkmarkColor={checkmarkColor} onChange={(newValue) => {setChecked(newValue)}}/>
    )
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Stateful,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    bgColor: { control: 'color' },
    checkmarkColor: { control: 'color' }
  }
} satisfies Meta<typeof Stateful>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        bgColor: 'rgb(236, 72, 153)',
        checkmarkColor: '#fff',
    }
}
// More on args: https://storybook.js.org/docs/react/writing-stories/args
