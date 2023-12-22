import { Box, type BoxProps } from './box'

export function DefaultContainer(props: BoxProps) {
	return <Box {...props} p={4} />
}
