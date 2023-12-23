import { type PropsWithChildren } from 'react'
import { TouchableOpacity, type TouchableOpacityProps } from 'react-native'
import {
	createRestyleComponent,
	createVariant,
	spacing,
	type BoxProps,
	type VariantProps,
} from '@shopify/restyle'

import { Theme } from '@/styles/theme'

type BoxCustomProps = BoxProps<Theme> & VariantProps<Theme, 'buttonVariants'>

const Box = createRestyleComponent<BoxCustomProps, Theme>([
	spacing,
	createVariant({ themeKey: 'buttonVariants' }),
])

type BaseButtonProps = BoxCustomProps &
	PropsWithChildren & {
		el?: Omit<TouchableOpacityProps, 'children'>
	}

export function BaseButton(props: BaseButtonProps) {
	const { el, ...rest } = props
	return (
		<TouchableOpacity activeOpacity={0.8} {...el}>
			<Box {...rest}>{rest.children}</Box>
		</TouchableOpacity>
	)
}
