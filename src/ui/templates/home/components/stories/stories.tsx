import { FlatList } from 'react-native'

import { Story, type StoryProps } from './components/story'

type StoriesProps = {
	stories: StoryProps[]
}

export function Stories(props: StoriesProps) {
	const { stories } = props
	return (
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
	)
}
