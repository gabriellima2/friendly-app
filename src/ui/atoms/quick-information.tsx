import { Typography } from './typography'
import { Box, type BoxProps } from './box'

type QuickInformationProps = BoxProps & {
	title: string
	content: string
	numberOfLines?: number
}

export function QuickInformation(props: QuickInformationProps) {
	const { title, content, numberOfLines = 1, ...rest } = props
	return (
		<Box flexDirection="row" alignItems="center" gap={1} {...rest}>
			<Typography.Title fontSize={16} color="light-gray">
				{title}
			</Typography.Title>
			<Typography.Paragraph fontSize={16} numberOfLines={numberOfLines}>
				{content}
			</Typography.Paragraph>
		</Box>
	)
}
