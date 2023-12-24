import { type PropsWithChildren } from 'react'
import { TouchableOpacity } from 'react-native'

import { Box, BoxProps, Typography } from '@/ui/atoms'

type FilterOptionProps = BoxProps &
	PropsWithChildren & {
		handleFilterChange: () => void
	}

export function FilterOption(props: FilterOptionProps) {
	const { handleFilterChange, children, ...rest } = props
	return (
		<TouchableOpacity onPress={handleFilterChange} style={{ zIndex: 100 }}>
			<Box alignItems="center" {...rest}>
				<Typography.Subtitle>{children}</Typography.Subtitle>
			</Box>
		</TouchableOpacity>
	)
}
