import { MessageCircleMore } from 'lucide-react-native'

import { BaseButton } from './base-button'
import { theme } from '@/styles/theme'

export function CommentButton() {
	return (
		<BaseButton>
			<MessageCircleMore color={theme.colors['light-gray']} />
		</BaseButton>
	)
}
