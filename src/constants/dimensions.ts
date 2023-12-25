import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')

export const dimensions = {
	screen: {
		default: { width, height },
		withSpacing: { width: width - 32, height },
	},
}
