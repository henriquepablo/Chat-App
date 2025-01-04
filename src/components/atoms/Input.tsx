import { View } from 'react-native'
import { TextInput } from 'react-native-paper'

interface IInput {
	label: string
	onChangeText: (text: string) => void
}

export const Input: React.FC<IInput> = ({ label, onChangeText }) => {
	return (
		<View>
			<TextInput
				mode="outlined"
				onChangeText={onChangeText}
				label={label}
				activeOutlineColor="#000"
				outlineStyle={{ borderRadius: 6 }}
			/>
		</View>
	)
}

export default Input
