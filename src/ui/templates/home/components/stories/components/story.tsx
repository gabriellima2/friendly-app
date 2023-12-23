import { Image } from 'react-native'
import { BlurView } from 'expo-blur'

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
				alignItems="center"
				position="absolute"
				bottom={0}
				left={0}
				width={136}
			>
				<Avatar
					url={author.avatarUrl}
					position="absolute"
					left={50}
					bottom={45}
					width={36}
					height={36}
					backgroundColor="util"
					zIndex={100}
				/>
				<BlurView
					tint="dark"
					intensity={90}
					style={{
						width: '100%',
						height: '100%',
						alignItems: 'center',
						paddingVertical: theme.spacing[5],
						paddingHorizontal: theme.spacing[4],
						overflow: 'hidden',
						borderBottomRightRadius: theme.borderRadii.rounded,
						borderBottomLeftRadius: theme.borderRadii.rounded,
						borderTopRightRadius: theme.borderRadii['rounded-sm'],
						borderTopLeftRadius: theme.borderRadii['rounded-sm'],
					}}
				>
					<Typography.Subtitle fontSize={16} numberOfLines={1}>
						{author.name}
					</Typography.Subtitle>
				</BlurView>
			</Box>
		</Box>
	)
}
