import { useCallback } from 'react'
import { FlatList } from 'react-native'

import { Story, type StoryProps } from './components/story'

type StoriesProps = {
	stories: StoryProps[]
}

export function Stories(props: StoriesProps) {
	const { stories } = props

	const renderItem = useCallback(({ item }: { item: StoryProps }) => {
		return <Story {...item} />
	}, [])

	return (
		<FlatList
			data={stories}
			keyExtractor={({ id }) => id}
			renderItem={renderItem}
			showsHorizontalScrollIndicator={false}
			decelerationRate="normal"
			contentContainerStyle={{
				gap: 16,
				paddingHorizontal: 16,
			}}
			horizontal
			removeClippedSubviews
			maxToRenderPerBatch={6}
			initialNumToRender={6}
			windowSize={3}
		/>
	)
}
