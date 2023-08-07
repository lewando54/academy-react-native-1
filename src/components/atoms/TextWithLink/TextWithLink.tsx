import React from 'react'
import { useNavigate } from 'react-router-dom'
import textWithLinkStyle from './TextWithLink.style'
import { View, Pressable, Text } from 'react-native'

interface TextWithLinkProps {
    paragraphText: string
    href: string
    anchorText: string
    testId: string
    anchorTagTestId?: string
}

function TextWithLink({paragraphText, href, anchorText, testId}: TextWithLinkProps): React.ReactElement {
    const navigate = useNavigate()

    const onClick = () => {
        navigate(href)
    }
    
    return (
        <View style={textWithLinkStyle.div} testID={testId}>
            <Text style={textWithLinkStyle.text}>
                {paragraphText}
            </Text>
            <Pressable onPress={onClick}>
                <Text style={[textWithLinkStyle.text, textWithLinkStyle.link]}>
                    {anchorText}
                </Text>
            </Pressable>
        </View>
    )
}

export default TextWithLink