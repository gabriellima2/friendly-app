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
		<Box>
			<Avatar url={author.avatarUrl} />
			<Box>
				<Typography.Title>{author.name}</Typography.Title>
				<Typography.Small>{timeAgo}</Typography.Small>
			</Box>
		</Box>
	)
}
