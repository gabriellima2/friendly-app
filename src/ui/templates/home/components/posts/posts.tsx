import { FlatList } from 'react-native'

import { Post, type PostProps } from './components'
import { theme } from '@/styles/theme'

type PostsProps = {
	posts: PostProps[]
}

export function Posts(props: PostsProps) {
	const { posts } = props
	return (
		<FlatList
			data={posts}
			keyExtractor={({ id }) => id}
			renderItem={({ item }) => <Post {...item} />}
			contentContainerStyle={{ gap: theme.spacing[6] }}
			scrollEnabled={false}
		/>
	)
}
