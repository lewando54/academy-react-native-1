/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react'

import SocialButtonList from './SocialButtonList'
import { create } from 'react-test-renderer'

const meta = {
    component: SocialButtonList,
    argTypes: {
        socials: { control: 'array' }
    }
} satisfies Meta<typeof SocialButtonList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        socials: [
            { id: 0, color: '#e90800', icon: 'google', href: 'https://google.pl/' },
            { id: 1, color: '#4768aa', icon: 'facebook', href: 'https://google.pl/' },
            { id: 2, color: '#0068c1', icon: 'linkedin', href: 'https://google.pl/' }
        ],
        testId: 'sociallisttest'
    }
}