import React, { useRef } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import socialButtonStyle from './SocialButton.style'
export type TiconProp = 'facebook' | 'google' | 'linkedin'
import { Linking, Pressable, Animated } from 'react-native'

interface socialButtonProps {
    color: string
    href: string
    icon: TiconProp
    testId: string
    size: number
}

function SocialButton ({ color, href, icon, testId, size }: socialButtonProps): React.ReactElement {
    const iconSize = size * 0.75
    const circleSize = size * 1.75

    const icons: { [key in TiconProp]: React.ReactNode } = {
      facebook: <FontAwesome5 name='facebook-f' color={color} size={iconSize}/>,
      google: <FontAwesome5 name='google' color={color} size={iconSize}/>,
      linkedin: <FontAwesome5 name='linkedin-in' color={color} size={iconSize}/>
    }

    const handlePress = async () => {
        await Linking.openURL(href)
    }

    const animatedButtonScale = useRef(new Animated.Value(1)).current;

    const onPressIn = () => {
          Animated.spring(animatedButtonScale, {
              toValue: 1.25,
              speed: 200,
              useNativeDriver: true,
          }).start();
      };
  
    const onPressOut = () => {
          Animated.spring(animatedButtonScale, {
              toValue: 1,
              speed: 200,
              useNativeDriver: true,
          }).start();
      };

    return (
        <Animated.View style={{transform: [{scale: animatedButtonScale}]}}>
          <Pressable onPress={handlePress} 
          style={[socialButtonStyle.base, {borderColor: color, width: circleSize, height: circleSize, borderRadius: circleSize}]}
          onPressIn={onPressIn}
          onPressOut={onPressOut}>
            {icons[icon]}
          </Pressable>
        </Animated.View>
    )
  }
  
  export default SocialButton