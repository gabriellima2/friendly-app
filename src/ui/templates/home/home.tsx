import { ScrollView } from 'react-native'

import {
	InteractionButtons,
	Stories,
	Posts,
	StoriesSkeleton,
} from './components'
import { Header, Filter, QueryHandler } from '@/ui/components'
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
				<QueryHandler
					data={stories.data}
					error={stories.error}
					isLoading={stories.isLoading}
					renderFallback={() => <StoriesSkeleton />}
					renderItem={(data) => <Stories stories={data!} />}
				/>
			</Box>
			<Box mt={8} gap={6} paddingHorizontal={4}>
				<Filter
					options={[
						{ text: 'Explore', value: 'explore' },
						{ text: 'Discover', value: 'discover' },
					]}
					onFilterChange={(v) => console.log(v)}
				/>
				<QueryHandler
					data={posts.data}
					error={posts.error}
					isLoading={posts.isLoading}
					renderFallback={() => (
						<Typography.Small>Carregando...</Typography.Small>
					)}
					renderItem={(data) => <Posts posts={data!} />}
				/>
			</Box>
		</ScrollView>
	)
}
