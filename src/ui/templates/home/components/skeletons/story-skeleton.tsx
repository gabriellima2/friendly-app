import { Animated } from 'react-native'

import { useAnimatedBrightness } from '@/hooks/use-animated-brightness'
import { theme } from '@/styles/theme'

export function StorySkeleton() {
	const brightness = useAnimatedBrightness()
	return (
		<Animated.View
			style={{
				width: 136,
				height: 192,
				backgroundColor: theme.colors['dark-gray'],
				borderRadius: theme.borderRadii.rounded,
				opacity: brightness,
			}}
		/>
	)
}
