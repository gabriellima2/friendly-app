import { Bell } from 'lucide-react-native'

import { BaseButton, Indicator } from '@/ui/atoms'
import { theme } from '@/styles/theme'

export function NotificationButton() {
	return (
		<BaseButton variant="rounded">
			<Indicator right={16} top={12} zIndex={100} position="absolute" />
			<Bell size={24} fill={theme.colors.gray} />
		</BaseButton>
	)
}
