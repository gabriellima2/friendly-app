import { Header } from '@/ui/components'
import { Box, DefaultContainer, Typography } from '@/ui/atoms'

export function Home() {
	return (
		<Box>
			<Header title="Friendly" />
			<DefaultContainer>
				<Typography.Paragraph>Content</Typography.Paragraph>
			</DefaultContainer>
		</Box>
	)
}
