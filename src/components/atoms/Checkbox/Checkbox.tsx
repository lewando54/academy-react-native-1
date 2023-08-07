import React, { useRef, useState, useImperativeHandle, forwardRef } from 'react'
import { Pressable, Animated, Text } from 'react-native'
import checkboxStyle from './Checkbox.style'
import { FontAwesome5 } from '@expo/vector-icons'
import { onChange } from 'react-native-reanimated'

export interface ICheckboxRef {
    clear: () => void
}

export interface ICheckboxProps {
    checked: boolean,
    disabled?: boolean,
    bgColor?: string,
    checkmarkColor?: string,
    testId?: string,
    onChange: (newValue: boolean) => void
}

function Checkbox(props: ICheckboxProps, ref: React.Ref<ICheckboxRef>): React.ReactElement{
	const animatedInitialState = useRef(new Animated.Value(1)).current
	const animatedCheckedState = useRef(new Animated.Value(0)).current
	const checkmarkRotation = animatedCheckedState.interpolate({
		inputRange: [0, 1],
		outputRange: ['180deg', '0deg']
	})

    const animateCheckboxCheck = () => {
        Animated.timing(animatedInitialState, {
			toValue: 0,
			duration: 100,
			useNativeDriver: true
		}).start()
		Animated.timing(animatedCheckedState, {
			toValue: 1,
			duration: 100,
			useNativeDriver: true
		}).start()
    }

    const animateCheckboxUncheck = () => {
        Animated.timing(animatedInitialState, {
			toValue: 1,
			duration: 100,
			useNativeDriver: true
		}).start()
		Animated.timing(animatedCheckedState, {
			toValue: 0,
			duration: 100,
			useNativeDriver: true
		}).start()
    }

    useImperativeHandle(ref, () => {
		return {
			clear() {
                props.onChange(false)
                animateCheckboxUncheck()
			}
		}
	})

	const handleChange = () => {
        if(props.checked){
            animateCheckboxUncheck()
        }
        else{
            animateCheckboxCheck()
        }
		props.onChange(!props.checked)
	}

	return (
		<Pressable 
			testID={props.testId} 
			style={[
				{width: 25, height: 25, position: 'relative'},
				props.disabled && checkboxStyle.disabled,
			]}
			onPress={handleChange}>
			<Animated.View style={[
				checkboxStyle.base,
				{opacity: animatedInitialState}]}>
			</Animated.View>
			<Animated.View style={[
				checkboxStyle.base,
				checkboxStyle.checked,
				{display: 'flex', alignItems: 'center', justifyContent: 'center'},
				{opacity: animatedCheckedState}]}>
				<Animated.View style={[
					{transform: [{rotate: checkmarkRotation}, {scale: animatedCheckedState}]}
				]}>
					<FontAwesome5 name="check" size={15} color={props.checkmarkColor ? props.checkmarkColor : 'white'}/>
				</Animated.View>
			</Animated.View>
		</Pressable>
	)
}

export default forwardRef(Checkbox)