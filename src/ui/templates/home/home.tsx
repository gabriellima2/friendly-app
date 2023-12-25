import { ScrollView } from 'react-native'

import {
	InteractionButtons,
	Stories,
	Posts,
	StoriesSkeleton,
} from './components'
import { Header, Filter } from '@/ui/components'
import { Box, Typography } from '@/ui/atoms'

import { useGetStories } from '@/hooks/use-get-stories'
import { useGetPosts } from '@/hooks/use-get-posts'

export function Home() {
	const stories = useGetStories()
	const posts = useGetPosts()
	return (
		<ScrollView>
			<Header title="Friendly" headerRight={InteractionButtons} />
			<Box gap={4} pt={4}>
				<Typography.Paragraph ml={4} color="white" fontSize={20}>
					Stories
				</Typography.Paragraph>
				{stories.isLoading && <StoriesSkeleton />}
				{!stories.isLoading && stories.error && (
					<Typography.Small>{stories.error}</Typography.Small>
				)}
				{!stories.isLoading && !stories.error && stories.data && (
					<Stories stories={stories.data} />
				)}
			</Box>
			<Box mt={8} gap={6} paddingHorizontal={4}>
				<Filter
					options={[
						{ text: 'Explore', value: 'explore' },
						{ text: 'Discover', value: 'discover' },
					]}
					onFilterChange={(v) => console.log(v)}
				/>
				{posts.isLoading && <Typography.Small>Carregando...</Typography.Small>}
				{!posts.isLoading && posts.error && (
					<Typography.Small>{posts.error}</Typography.Small>
				)}
				{!posts.isLoading && !posts.error && posts.data && (
					<Posts posts={posts.data} />
				)}
			</Box>
		</ScrollView>
	)
}
