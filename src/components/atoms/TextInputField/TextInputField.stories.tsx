/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react'
import { useState } from 'react'

import TextInputField from './TextInputField'
import { create } from 'react-test-renderer'

interface IInputMockupProps {
    placeholder: string,
    value: string,
    secureTextEntry: boolean
}

function StatefulTextInputField({placeholder, value, secureTextEntry}: IInputMockupProps){
    const [textValue, setTextValue] = useState(value)

    return (
        <TextInputField value={textValue} placeholder={placeholder} secureTextEntry={secureTextEntry} onChange={(newValue) => setTextValue(newValue)}></TextInputField>
    )
}

const meta = {
    component: StatefulTextInputField,
    argTypes: {
        placeholder: { control: 'text' },
        value: { control: 'text' },
        secureTextEntry: { control: 'boolean' }
    }
} satisfies Meta<typeof StatefulTextInputField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        placeholder: 'Type something',
        value: 'Initial value',
        secureTextEntry: false,
    }
}