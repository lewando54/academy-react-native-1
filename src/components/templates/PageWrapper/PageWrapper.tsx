import React from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'
import pageWrapperStyle from './PageWrapper.style'

interface IPageWrapperProps {
    children: React.ReactNode
    style: StyleProp<ViewStyle>
}

function PageWrapper({children, style}: IPageWrapperProps): React.ReactElement {
    return (
        <View style={[pageWrapperStyle.container, style]}>
            {children}
        </View>
    )
}

export default PageWrapper