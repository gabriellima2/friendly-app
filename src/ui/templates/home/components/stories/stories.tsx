import { FlatList } from 'react-native'

import { Box, Typography } from '@/ui/atoms'
import { Story, type StoryProps } from './components/story'

type StoriesProps = {
	stories: StoryProps[]
}

export function Stories(props: StoriesProps) {
	const { stories } = props
	return (
		<Box gap={4}>
			<Typography.Subtitle ml={4}>Stories</Typography.Subtitle>
			<FlatList
				data={stories}
				keyExtractor={({ id }) => id}
				renderItem={({ item }) => <Story {...item} />}
				showsHorizontalScrollIndicator={false}
				decelerationRate="normal"
				contentContainerStyle={{
					gap: 16,
					paddingHorizontal: 16,
				}}
				horizontal
			/>
		</Box>
	)
}
