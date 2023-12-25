import { useCallback } from 'react'
import { FlatList } from 'react-native'

import { Post, type PostProps } from './components'
import { theme } from '@/styles/theme'

type PostsProps = {
	posts: PostProps[]
}

export function Posts(props: PostsProps) {
	const { posts } = props

	const renderItem = useCallback(({ item }: { item: PostProps }) => {
		return <Post {...item} />
	}, [])

	return (
		<FlatList
			data={posts}
			keyExtractor={({ id }) => id}
			renderItem={renderItem}
			contentContainerStyle={{ gap: theme.spacing[6] }}
			scrollEnabled={false}
			removeClippedSubviews
			maxToRenderPerBatch={3}
			initialNumToRender={3}
			windowSize={3}
		/>
	)
}
