import React, { useRef } from 'react'
import { Pressable, Text, GestureResponderEvent, Animated } from 'react-native'
import buttonStyle from './Button.style'

type colorProp = 'primary' | 'secondary' | string

interface ButtonProps {
  children: string
  color?: colorProp
  onClick?: ((event: GestureResponderEvent) => void) | null | undefined
  testId?: string
}

function Button({ color = 'primary', children, onClick, testId }: ButtonProps): React.ReactElement{

	const animatedButtonScale = useRef(new Animated.Value(1)).current

	const onPressIn = () => {
		Animated.spring(animatedButtonScale, {
			toValue: 1.25,
			speed: 200,
			useNativeDriver: true,
		}).start()
	}
  
	const onPressOut = () => {
		Animated.spring(animatedButtonScale, {
			toValue: 1,
			speed: 200,
			useNativeDriver: true,
		}).start()
	}

	let selectedColor = buttonStyle.primary
	if(color === 'secondary'){
		selectedColor = buttonStyle.secondary
	}
	else if (color !== 'primary'){
		selectedColor = {backgroundColor: color}
	}

	return (
		<Animated.View style={{transform: [{scale: animatedButtonScale}], width: '100%'}}>
			<Pressable style={[buttonStyle.base, selectedColor]} onPress={onClick} onPressIn={onPressIn} onPressOut={onPressOut} testID={testId}>
				<Text style={buttonStyle.text}>{children}</Text>
			</Pressable>
		</Animated.View>
	)
}

export default Button