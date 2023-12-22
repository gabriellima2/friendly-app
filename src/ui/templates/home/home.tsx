import { Header } from '@/ui/components'

import { Box, DefaultContainer, Typography } from '@/ui/atoms'
import { InteractionButtons } from './components'

export function Home() {
	return (
		<Box>
			<Header title="Friendly" headerRight={InteractionButtons} />
			<DefaultContainer>
				<Typography.Paragraph>Content</Typography.Paragraph>
			</DefaultContainer>
		</Box>
	)
}
