import { Typography } from '../atoms'

type QueryHandlerProps<T> = {
	data: T
	error?: string
	isLoading: boolean
	renderFallback: () => React.JSX.Element
	renderItem: (data: T) => React.JSX.Element
}

export function QueryHandler<T>(props: QueryHandlerProps<T>) {
	const { data, error, isLoading, renderFallback, renderItem } = props
	if (isLoading) return renderFallback()
	if (!isLoading && error) return <Typography.Small>{error}</Typography.Small>
	if (!isLoading && !error && data) return renderItem(data)
	return null
}
