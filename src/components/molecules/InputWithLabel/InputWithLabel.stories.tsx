/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react'
import { useState } from 'react'

import InputWithLabel from './InputWithLabel'
import { create } from 'react-test-renderer'

interface IInputWithLabelMockupProps {
    placeholder: string,
    value: string,
    secureTextEntry: boolean
    labelText: string
}

function StatefulInputWithLabel({placeholder, value, secureTextEntry, labelText}: IInputWithLabelMockupProps){
    const [textValue, setTextValue] = useState(value)

    return (
        <InputWithLabel labelText={labelText} value={textValue} placeholder={placeholder} secureTextEntry={secureTextEntry} onChange={(newValue) => setTextValue(newValue)}></InputWithLabel>
    )
}

const meta = {
    component: StatefulInputWithLabel,
    argTypes: {
        placeholder: { control: 'text' },
        value: { control: 'text' },
        secureTextEntry: { control: 'boolean' },
        labelText: { control: 'text' }
    }
} satisfies Meta<typeof StatefulInputWithLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        placeholder: 'Type something',
        value: 'Initial value',
        secureTextEntry: false,
        labelText: 'Full name'
    }
}