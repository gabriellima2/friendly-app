import { Typography, type TypographyProps } from './typography'

type QuickInformationProps = TypographyProps & {
	title: string
	content: string
	numberOfLines?: number
}

export function QuickInformation(props: QuickInformationProps) {
	const { title, content, numberOfLines = 1, ...rest } = props
	return (
		<Typography.Small numberOfLines={numberOfLines} {...rest}>
			<Typography.Small fontWeight="bold">{title} </Typography.Small>
			{content}
		</Typography.Small>
	)
}
