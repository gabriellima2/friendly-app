import { Dimensions, Image } from 'react-native'
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

import { theme } from '@/styles/theme'

const screen = Dimensions.get('screen')
const SCREEN_PADDING_X = 32
const CONTAINER_WIDTH = screen.width - (SCREEN_PADDING_X + 16)

export function Post() {
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
				<PostGeneralInformation
					author={{
						name: 'Ahmad Dorwart',
						avatarUrl:
							'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/945.jpg',
					}}
					timeAgo="10 Mins Ago"
				/>
				<PostMenu />
			</Box>
			<Image
				source={{
					uri: 'https://loremflickr.com/440/440?lock=1799342228766720',
				}}
				width={CONTAINER_WIDTH}
				height={CONTAINER_WIDTH}
				style={{ flex: 1, borderRadius: theme.borderRadii['rounded-lg'] }}
			/>
			<Box position="absolute" bottom={0} width={CONTAINER_WIDTH + 16}>
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
						<QuickInformation title="229" content="Likes" />
						<Typography.Small>•</Typography.Small>
						<QuickInformation title="200" content="Comments" />
					</Box>
					<PostPreviewComments
						renderTotalComments={2}
						comments={[
							{
								id: '1',
								authorName: 'Amat Paujl',
								content:
									'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
							},
							{
								id: '2',
								authorName: 'Amat Paujl',
								content:
									'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
							},
						]}
					/>
				</BlurView>
			</Box>
		</Box>
	)
}
