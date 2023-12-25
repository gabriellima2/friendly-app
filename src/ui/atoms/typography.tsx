import { createText } from '@shopify/restyle'
import type { Theme } from '@/styles/theme'

const Text = createText<Theme>()

export type TypographyProps = Omit<Parameters<typeof Text>[0], 'variant'>

function Title(props: TypographyProps) {
	return <Text variant="title" color="white" {...props} />
}

function Subtitle(props: TypographyProps) {
	return <Text variant="subtitle" color="white" {...props} />
}

function Paragraph(props: TypographyProps) {
	return <Text variant="paragraph" color="gray" {...props} />
}

function Small(props: TypographyProps) {
	return <Text variant="small" color="gray" {...props} />
}

export const Typography = {
	Title,
	Subtitle,
	Paragraph,
	Small,
}
