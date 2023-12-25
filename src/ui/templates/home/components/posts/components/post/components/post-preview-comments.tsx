import { Box, Comment } from '@/ui/atoms'

type PostPreviewCommentsProps = {
	comments: { id: string; author: { name: string }; content: string }[]
	renderTotalComments: number
}

export function PostPreviewComments(props: PostPreviewCommentsProps) {
	const { comments, renderTotalComments } = props
	const totalComments = comments.length
	if (!totalComments) return
	const renderTotal =
		totalComments < renderTotalComments ? totalComments : renderTotalComments
	const slicedComments = comments.slice(0, renderTotal)
	return (
		<Box gap={2}>
			{slicedComments.map((comment) => (
				<Comment
					key={comment.id}
					authorName={comment.author.name}
					content={comment.content}
				/>
			))}
		</Box>
	)
}
