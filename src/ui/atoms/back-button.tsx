import Icon from '@expo/vector-icons/Ionicons'

import { BaseButton } from './base-button'
import { theme } from '@/styles/theme'

export function BackButton() {
	return (
		<BaseButton variant="rounded">
			<Icon name="arrow-back" size={24} color={theme.colors.gray} />
		</BaseButton>
	)
}
