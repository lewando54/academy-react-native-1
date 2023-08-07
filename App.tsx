/* eslint-disable @typescript-eslint/no-var-requires */
import { StatusBar } from 'expo-status-bar'
import { NativeRouter, Route, Routes, useNavigate } from 'react-router-native'
import LoginPage from './src/pages/Login/LoginPage'
import { View, Text, Button } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

function Test(): React.ReactElement{
	const navigate = useNavigate()

	return (
		<View style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Text>Test</Text><Button title='Return' onPress={() => navigate('/')} /></View>
	)
}

function App() {
	return (
		<NativeRouter>
			<Routes>
				<Route path="/" Component={LoginPage} />
				<Route path="/test" Component={Test} />
			</Routes>
			<StatusBar style="auto" />
		</NativeRouter>
	)
}

let AppEntryPoint = App

if (Constants.expoConfig.extra.storybookEnabled === 'true') {
	AppEntryPoint = require('./.storybook').default
}

export default AppEntryPoint
