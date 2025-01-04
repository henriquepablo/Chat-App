/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type React from 'react'
import { useState } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { PaperProvider, TextInput } from 'react-native-paper'
import Input from './src/components/atoms/Input'

function App(): React.JSX.Element {
	const [text, setText] = useState('')
	console.log(text)
	return (
		<PaperProvider>
			<SafeAreaView />
			<StatusBar />
			<Input label="Teste" onChangeText={setText} />
		</PaperProvider>
	)
}

export default App
