/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react'

import SocialButton from './SocialButton'
import { create } from 'react-test-renderer'

const meta = {
    component: SocialButton,
    argTypes: {
        color: { control: 'color' },
        href: { control: 'text' },
        icon: { control: 'select', options: ['google', 'facebook', 'linkedin'] },
        size: { control: 'number' }
    }
} satisfies Meta<typeof SocialButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        color: 'red',
        href: 'https://google.pl',
        icon: 'google',
        testId: '1',
        size: 30
    }
}