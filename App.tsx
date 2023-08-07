/* eslint-disable @typescript-eslint/no-var-requires */
import { StatusBar } from 'expo-status-bar'
import { NativeRouter, Route, Routes, Navigate } from 'react-router-native'
import LoginPage from './src/pages/Login/LoginPage'
import RegisterPage from './src/pages/Register/RegisterPage'
import { View, Text, Button } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

function App() {
	return (
		<NativeRouter>
			<Routes>
				<Route path="/" Component={() => <Navigate to="/login" />} />
				<Route path="/login" Component={LoginPage} />
				<Route path="/register" Component={RegisterPage} />
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
