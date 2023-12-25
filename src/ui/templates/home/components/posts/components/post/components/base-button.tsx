import { TouchableOpacity, type TouchableOpacityProps } from 'react-native'

export function BaseButton(props: TouchableOpacityProps) {
	return <TouchableOpacity {...props} activeOpacity={0.8} />
}
