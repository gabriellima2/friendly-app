import { Send } from 'lucide-react-native'

import { BaseButton } from './base-button'
import { theme } from '@/styles/theme'

export function ShareButton() {
	return (
		<BaseButton>
			<Send color={theme.colors['light-gray']} />
		</BaseButton>
	)
}
