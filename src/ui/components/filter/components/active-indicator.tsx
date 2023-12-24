import { Animated } from 'react-native'
import { theme } from '@/styles/theme'

type ActiveIndicatorProps = {
	totalItems: number
	style: {
		containerWidth: number
		width: number
		height: number
		translateX: Animated.Value
	}
}

export function ActiveIndicator(props: ActiveIndicatorProps) {
	const { totalItems, style } = props
	return (
		<Animated.View
			style={{
				position: 'absolute',
				width: style.width,
				height: style.height,
				left: style.containerWidth / totalItems / 2 - Math.abs(style.width / 2),
				borderRadius: theme.borderRadii['rounded-lg'],
				backgroundColor: theme.colors.blue,
				transform: [{ translateX: style.translateX }],
			}}
		/>
	)
}
