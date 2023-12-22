import { Image } from 'react-native'

import { Avatar, Box, Typography } from '@/ui/atoms'
import { theme } from '@/styles/theme'

export type StoryProps = {
	id: string
	imageUrl: string
	author: {
		name: string
		avatarUrl: string
	}
}

export function Story(props: StoryProps) {
	const { imageUrl, author } = props
	return (
		<Box width={136} height={192}>
			<Image
				source={{ uri: imageUrl }}
				style={{
					flex: 1,
					borderRadius: theme.borderRadii.rounded,
				}}
				resizeMode="cover"
			/>
			<Box
				p={4}
				py={5}
				borderWidth={1}
				borderColor="dark-gray"
				borderBottomRightRadius="rounded"
				borderBottomLeftRadius="rounded"
				borderTopLeftRadius="rounded-sm"
				borderTopRightRadius="rounded-sm"
				backgroundColor="dark-gray-transparent"
				position="absolute"
				bottom={0}
				left={0}
				width={136}
			>
				<Avatar
					url={author.avatarUrl}
					position="absolute"
					left={45}
					bottom={45}
					borderWidth={4}
					borderColor="util"
				/>
				<Typography.Subtitle fontSize={16} numberOfLines={1}>
					{author.name}
				</Typography.Subtitle>
			</Box>
		</Box>
	)
}
