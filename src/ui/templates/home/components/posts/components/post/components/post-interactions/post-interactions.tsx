import { ShareButton, CommentButton, LikeButton } from './components'
import { Box } from '@/ui/atoms'

export function PostInteractions() {
	return (
		<Box flexDirection="row" alignItems="center" gap={4}>
			<LikeButton />
			<CommentButton />
			<ShareButton />
		</Box>
	)
}
