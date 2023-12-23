import { ScrollView } from 'react-native'

import { StorySkeleton } from './story-skeleton'
import { Box } from '@/ui/atoms'

import { theme } from '@/styles/theme'

export function StoriesSkeleton() {
	return (
		<ScrollView
			horizontal
			contentContainerStyle={{ paddingHorizontal: theme.spacing[4] }}
		>
			<Box flexDirection="row" gap={4}>
				<StorySkeleton />
				<StorySkeleton />
				<StorySkeleton />
				<StorySkeleton />
				<StorySkeleton />
				<StorySkeleton />
				<StorySkeleton />
				<StorySkeleton />
			</Box>
		</ScrollView>
	)
}
