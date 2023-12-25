import { Image } from 'react-native'
import { BlurView } from 'expo-blur'

import {
	PostGeneralInformation,
	PostPreviewComments,
	CommentButton,
	ShareButton,
	LikeButton,
	PostMenu,
} from './components'
import { Box, QuickInformation, Typography } from '@/ui/atoms'

import { dimensions } from '@/constants/dimensions'
import { theme } from '@/styles/theme'

export type PostProps = {
	id: string
	imageUrl: string
	author: { name: string; avatarUrl: string }
	likes: number
	comments: { id: string; author: { name: string }; content: string }[]
	createdAt: Date
}

const CONTAINER_DIMENSIONS = {
	PADDING: 16,
	WIDTH: dimensions.screen.withSpacing.width - 16,
}

export function Post(props: PostProps) {
	const { imageUrl, author, likes, comments, createdAt } = props
	return (
		<Box
			backgroundColor="dark-gray-transparent"
			borderRadius="rounded-lg"
			p={2}
		>
			<Box
				p={2}
				pb={4}
				flexDirection="row"
				alignItems="center"
				justifyContent="space-between"
			>
				<PostGeneralInformation author={author} createdAt={createdAt} />
				<PostMenu />
			</Box>
			<Image
				source={{ uri: imageUrl }}
				width={CONTAINER_DIMENSIONS.WIDTH}
				height={CONTAINER_DIMENSIONS.WIDTH}
				style={{ flex: 1, borderRadius: theme.borderRadii['rounded-lg'] }}
			/>
			<Box
				position="absolute"
				bottom={0}
				width={CONTAINER_DIMENSIONS.WIDTH + CONTAINER_DIMENSIONS.PADDING}
			>
				<BlurView
					tint="dark"
					intensity={90}
					style={{
						width: '100%',
						overflow: 'hidden',
						gap: theme.spacing[4],
						padding: theme.spacing[4],
						borderBottomLeftRadius: theme.borderRadii['rounded-lg'],
						borderBottomRightRadius: theme.borderRadii['rounded-lg'],
					}}
				>
					<Box flexDirection="row" alignItems="center" gap={4}>
						<LikeButton />
						<CommentButton />
						<ShareButton />
					</Box>
					<Box flexDirection="row" alignItems="center" gap={3}>
						<QuickInformation title={likes.toString()} content="Likes" />
						<Typography.Small>•</Typography.Small>
						<QuickInformation
							title={comments.length.toString()}
							content="Comments"
						/>
					</Box>
					<PostPreviewComments renderTotalComments={2} comments={comments} />
				</BlurView>
			</Box>
		</Box>
	)
}
