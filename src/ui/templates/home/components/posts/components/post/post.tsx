import { Image } from 'react-native'

import {
	PostGeneralInformation,
	PostPreviewComments,
	PostInteractions,
	PostMenu,
} from './components'
import { Box, QuickInformation } from '@/ui/atoms'

export function Post() {
	return (
		<Box>
			<Box>
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
				width={500}
				height={500}
			/>
			<Box>
				<PostInteractions />
				<Box>
					<QuickInformation title="229" content="Likes" />
					<QuickInformation title="200" content="Comments" />
				</Box>
			</Box>
			<PostPreviewComments
				renderTotalComments={2}
				comments={[
					{
						id: '1',
						authorName: 'Amat Paujl',
						content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
					},
					{
						id: '2',
						authorName: 'Amat Paujl',
						content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
					},
				]}
			/>
		</Box>
	)
}
