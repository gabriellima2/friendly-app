import { MessageSquareText } from 'lucide-react-native'

import { BaseButton } from '@/ui/atoms'
import { theme } from '@/styles/theme'

export function MessageButton() {
	return (
		<BaseButton variant="rounded">
			<MessageSquareText
				size={24}
				color={theme.colors['dark-gray']}
				fill={theme.colors.gray}
			/>
		</BaseButton>
	)
}
