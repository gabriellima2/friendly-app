import { QuickInformation } from './quick-information'

type CommentProps = {
	authorName: string
	content: string
	numberOfLines?: number
}

export function Comment(props: CommentProps) {
	const { authorName, content, numberOfLines = 2 } = props
	return (
		<QuickInformation
			title={authorName}
			content={content}
			numberOfLines={numberOfLines}
		/>
	)
}
