import { Avatar, Box, Typography } from '@/ui/atoms'

type PostGeneralInformationProps = {
	author: {
		avatarUrl: string
		name: string
	}
	timeAgo: string
}

export function PostGeneralInformation(props: PostGeneralInformationProps) {
	const { author, timeAgo } = props
	return (
		<Box flexDirection="row" gap={4}>
			<Avatar url={author.avatarUrl} />
			<Box gap={1}>
				<Typography.Title fontSize={20}>{author.name}</Typography.Title>
				<Typography.Small>{timeAgo}</Typography.Small>
			</Box>
		</Box>
	)
}
