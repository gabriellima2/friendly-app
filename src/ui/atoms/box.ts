import { createBox } from '@shopify/restyle'
import type { Theme } from '@/styles/theme'

export type BoxProps = Parameters<typeof Box>[0]

export const Box = createBox<Theme>()
