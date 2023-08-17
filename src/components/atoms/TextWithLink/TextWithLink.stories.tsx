/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { StoryObj, Meta } from '@storybook/react'

import { MemoryRouter } from 'react-router-native'
import TextWithLink from './TextWithLink'
import { create } from 'react-test-renderer'

interface ITextWithLinkMockupProps {
    paragraphText: string
    href: string
    anchorText: string
}

function RouterWrapTextWithLink({paragraphText, href, anchorText}: ITextWithLinkMockupProps){

    return (
        <MemoryRouter initialEntries={['/', '/test']}>
            <TextWithLink paragraphText={paragraphText} href={href} anchorText={anchorText} testId='test'/>
        </MemoryRouter>
    )
}

const meta = {
    component: RouterWrapTextWithLink,
    argTypes: {
        paragraphText: { control: 'string' },
        href: { control: 'string' },
        anchorText: { control: 'string' }
    }
} satisfies Meta<typeof RouterWrapTextWithLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        paragraphText: 'If you want cookies',
        href: '/test',
        anchorText: 'click me!'
    }
}