import { useEffect, useState } from 'react'

export function useQuery<T>(fn: () => Promise<T>) {
	const [data, setData] = useState<undefined | T>(undefined)
	const [error, setError] = useState<undefined | string>(undefined)
	const [isLoading, setIsLoading] = useState(true)

	const execute = async () => {
		try {
			const response = await fn()
			setData(response)
		} catch (err) {
			if (err instanceof Error) return setError(err.message)
			setError('An unknown error has occurred')
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		execute()
	}, [])

	return {
		data,
		error,
		isLoading,
	}
}
