import { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'

export type UseHeaderStateParams = {
	withBackButton?: boolean
}

export function useHeaderState(params: UseHeaderStateParams) {
	const { withBackButton } = params
	const [canGoBack, setCanGoBack] = useState(false)
	const navigation = useNavigation()

	useEffect(() => {
		setCanGoBack(!!withBackButton && navigation.canGoBack())
	}, [])

	return {
		canGoBack,
	}
}
