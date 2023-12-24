import { Box, Comment } from '@/ui/atoms'

type PostPreviewCommentsProps = {
	comments: { id: string; authorName: string; content: string }[]
	renderTotalComments: number
}

export function PostPreviewComments(props: PostPreviewCommentsProps) {
	const { comments, renderTotalComments } = props
	const slicedComments = comments.slice(0, renderTotalComments)
	return (
		<Box>
			{slicedComments.map((comment) => (
				<Comment
					key={comment.id}
					authorName={comment.authorName}
					content={comment.content}
				/>
			))}
		</Box>
	)
}
