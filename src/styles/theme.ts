import { createTheme } from '@shopify/restyle'

import { buttonVariants } from './button-variants'
import { textVariants } from './text-variants'
import { borderRadii } from './border-radii'
import { spacing } from './spacing'
import { colors } from './colors'

export const theme = createTheme({
	colors,
	textVariants,
	spacing,
	borderRadii,
	buttonVariants,
})

export type Theme = typeof theme
