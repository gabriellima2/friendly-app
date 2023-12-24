import { useRef } from 'react'
import { Animated } from 'react-native'

type UseAnimatedTranslateXParams = {
	containerWidth: number
	totalChildren: number
}

export function useAnimatedTranslateX(params: UseAnimatedTranslateXParams) {
	const { containerWidth, totalChildren } = params
	const translateX = useRef(new Animated.Value(0)).current

	const handleTranslateXChange = (params: { currentIndex: number }) => {
		const { currentIndex } = params
		Animated.spring(translateX, {
			toValue: currentIndex * (containerWidth / totalChildren),
			useNativeDriver: true,
		}).start()
	}

	return {
		translateX,
		handleTranslateXChange,
	}
}
