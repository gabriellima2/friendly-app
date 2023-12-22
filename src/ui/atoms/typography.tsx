import { createText } from '@shopify/restyle'
import type { Theme } from '@/styles/theme'

const Text = createText<Theme>()

type TextProps = Omit<Parameters<typeof Text>[0], 'variant'>

function Title(props: TextProps) {
	return <Text variant="title" color="white" {...props} />
}

function Subtitle(props: TextProps) {
	return <Text variant="subtitle" color="white" {...props} />
}

function Paragraph(props: TextProps) {
	return <Text variant="paragraph" color="gray" {...props} />
}

function Small(props: TextProps) {
	return <Text variant="small" color="gray" {...props} />
}

export const Typography = {
	Title,
	Subtitle,
	Paragraph,
	Small,
}
