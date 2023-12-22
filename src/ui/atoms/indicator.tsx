import { Box, type BoxProps } from './box'

type IndicatorProps = Omit<BoxProps, 'width' | 'height' | 'borderRadius'>

export function Indicator(props: IndicatorProps) {
	return (
		<Box
			{...props}
			width={6}
			height={6}
			borderRadius="full"
			backgroundColor="blue"
		/>
	)
}
