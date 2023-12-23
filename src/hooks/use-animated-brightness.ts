import { useEffect, useRef } from 'react'
import { Animated } from 'react-native'

export function useAnimatedBrightness() {
	const brightness = useRef(new Animated.Value(0.5)).current

	useEffect(() => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(brightness, {
					toValue: 0.8,
					duration: 550,
					useNativeDriver: true,
				}),
				Animated.timing(brightness, {
					toValue: 0.5,
					duration: 550,
					useNativeDriver: true,
				}),
			]),
		).start()
	}, [brightness])

	return brightness
}
