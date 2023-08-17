import React, { createRef, useState, forwardRef } from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native'
import * as renderer from 'react-test-renderer'
import TextInputField, { ITextInputFieldRef } from './TextInputField';
import textInputFieldStyle from './TextInputField.style'

interface ITextInputFieldMockProps{
    initialText?: string
    placeholder?: string
    secureTextEntry?: boolean
}

const StatefulTextInputField = forwardRef(({initialText='', placeholder='', secureTextEntry=false}: ITextInputFieldMockProps, ref: React.Ref<ITextInputFieldRef>) => {
    const [text, setText] = useState(initialText)

    return(
        <TextInputField value={text} placeholder={placeholder} secureTextEntry={false} testId='textinput-test' ref={ref} onChange={(newValue) => setText(newValue)}/>
    )
})

describe('TextInputField', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<TextInputField value='test' onChange={() => {}} />)
        expect(tree).toMatchSnapshot()
    })

    it('shoud focus when focus from ref is called', () => {
        const textInputFieldRef = createRef<ITextInputFieldRef>()
        const { getByTestId } = render(<StatefulTextInputField ref={textInputFieldRef}/>)
        textInputFieldRef.current.focus()
        waitFor(() => {
            expect(getByTestId('textinput-test').props.style).toContain(textInputFieldStyle.focused)
        })
    })

    it('should input text correctly', () => {
        const { getByTestId, getByDisplayValue } = render(<StatefulTextInputField/>)
        fireEvent.changeText(getByTestId('textinput-test'), 'Hello world!')
        expect(getByDisplayValue('Hello world!')).toBeTruthy()
    })

    it('should apply focused style when input is focused and remove it when blurred', () => {
        const { getByTestId } = render(<StatefulTextInputField/>)

        const input = getByTestId('textinput-test')
        expect(input.props.style).not.toContain(textInputFieldStyle.focused)

        fireEvent(input, 'focus')
        expect(input.props.style).toContain(textInputFieldStyle.focused)

        fireEvent(input, 'blur')
        expect(input.props.style).not.toContain(textInputFieldStyle.focused)
    })

    it('should not call onChange when it is not passed as a prop', () => {
        const { getByTestId } = render(
            <TextInputField 
                value={'text'} 
                placeholder={'placeholder'} 
                secureTextEntry={false} 
                testId='textinput-test'
                onChange={undefined}
            />
        )
        const input = getByTestId('textinput-test')
        fireEvent.changeText(input, 'new value')
    })
})