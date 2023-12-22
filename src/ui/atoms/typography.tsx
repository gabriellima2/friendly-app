import { createText } from '@shopify/restyle'
import type { Theme } from '@/styles/theme'

const Text = createText<Theme>()

type TextProps = Omit<Parameters<typeof Text>[0], 'variant'>

function Title(props: TextProps) {
	return <Text variant="title" {...props} />
}

function Subtitle(props: TextProps) {
	return <Text variant="subtitle" {...props} />
}

function Paragraph(props: TextProps) {
	return <Text variant="paragraph" {...props} />
}

function Small(props: TextProps) {
	return <Text variant="small" {...props} />
}

export const Typography = {
	Title,
	Subtitle,
	Paragraph,
	Small,
}
