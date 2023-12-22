import { Image } from 'react-native'

import { Box, type BoxProps } from './box'
import { theme } from '@/styles/theme'

type AvatarProps = BoxProps & {
	url: string
}

export function Avatar(props: AvatarProps) {
	const { url, ...rest } = props
	return (
		<Box width={44} height={44} {...rest} borderRadius="full">
			<Image
				source={{ uri: url }}
				style={{
					flex: 1,
					borderRadius: theme.borderRadii.full,
				}}
				resizeMode="cover"
			/>
		</Box>
	)
}
