import { BackButton, Box, Typography } from '@/ui/atoms'
import {
	useHeaderState,
	type UseHeaderStateParams,
} from './hooks/use-header-state'

export type HeaderProps = UseHeaderStateParams & {
	title?: string
	headerRight?: () => JSX.Element
}

export function Header(props: HeaderProps) {
	const { title, withBackButton, headerRight } = props
	const { canGoBack } = useHeaderState({ withBackButton })
	return (
		<Box
			px={5}
			pt={12}
			pb={8}
			flexDirection="row"
			alignItems="center"
			justifyContent="space-between"
		>
			<Box flexDirection="row" alignItems="center" gap={5}>
				{canGoBack && <BackButton />}
				<Typography.Title numberOfLines={1}>{title}</Typography.Title>
			</Box>
			{headerRight && headerRight()}
		</Box>
	)
}