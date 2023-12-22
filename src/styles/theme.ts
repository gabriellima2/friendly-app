import { createTheme } from '@shopify/restyle'

import { textVariants } from './text-variants'
import { borderRadii } from './border-radii'
import { spacing } from './spacing'
import { colors } from './colors'

export const theme = createTheme({
	colors,
	textVariants,
	spacing,
	borderRadii,
})

export type Theme = typeof theme
