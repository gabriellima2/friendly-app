import { Dimensions, ScrollView } from 'react-native'

import { FilterOption, ActiveIndicator } from './components'
import { Box } from '@/ui/atoms'

import { useAnimatedTranslateX } from '@/hooks/use-animated-translate-x'

const screen = Dimensions.get('screen')
const defaultStyles = {
	containerPadding: 8,
	containerHeight: 56,
	optionWidth: screen.width / 2,
}

type FilterProps = {
	options: { text: string; value: string }[]
	onFilterChange: (value: string) => void
}

export function Filter(props: FilterProps) {
	const { options, onFilterChange } = props
	const containerWidth = Math.abs(defaultStyles.optionWidth * options.length)
	const { translateX, handleTranslateXChange } = useAnimatedTranslateX({
		containerWidth,
		totalChildren: options.length,
	})
	return (
		<Box
			flexDirection="row"
			height={defaultStyles.containerHeight}
			backgroundColor="dark-gray-transparent"
			alignItems="center"
			borderRadius="rounded-lg"
			overflow="hidden"
		>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={{ height: '100%' }}
				contentContainerStyle={{ alignItems: 'center' }}
			>
				{options.map((option, i) => (
					<FilterOption
						key={option.text}
						width={defaultStyles.optionWidth}
						handleFilterChange={() => {
							handleTranslateXChange({ currentIndex: i })
							onFilterChange(option.value)
						}}
					>
						{option.text}
					</FilterOption>
				))}
				<ActiveIndicator
					totalItems={options.length}
					style={{
						containerWidth,
						width: defaultStyles.optionWidth - defaultStyles.containerPadding,
						height:
							defaultStyles.containerHeight - defaultStyles.containerPadding,
						translateX,
					}}
				/>
			</ScrollView>
		</Box>
	)
}
