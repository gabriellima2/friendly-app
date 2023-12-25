import { Avatar, Box, Typography } from '@/ui/atoms'

type PostGeneralInformationProps = {
	author: {
		avatarUrl: string
		name: string
	}
	createdAt: Date
}

export function PostGeneralInformation(props: PostGeneralInformationProps) {
	const { author, createdAt } = props

	return (
		<Box flexDirection="row" gap={4}>
			<Avatar url={author.avatarUrl} />
			<Box gap={1}>
				<Typography.Title fontSize={20}>{author.name}</Typography.Title>
				<Typography.Small>10 Mins Ago</Typography.Small>
			</Box>
		</Box>
	)
}
