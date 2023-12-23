import { useGetStories } from '@/hooks/use-get-stories'

import { InteractionButtons, Stories, StoriesSkeleton } from './components'
import { Box, Typography } from '@/ui/atoms'
import { Header } from '@/ui/components'

export function Home() {
	const { data, error, isLoading } = useGetStories()
	return (
		<Box>
			<Header title="Friendly" headerRight={InteractionButtons} />
			<Box gap={4} pt={4}>
				<Typography.Paragraph ml={4} color="white" fontSize={20}>
					Stories
				</Typography.Paragraph>
				{isLoading && <StoriesSkeleton />}
				{!isLoading && error && <Typography.Small>{error}</Typography.Small>}
				{!isLoading && !error && data && <Stories stories={data} />}
			</Box>
		</Box>
	)
}
