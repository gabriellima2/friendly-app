import { MoreHorizontal } from 'lucide-react-native'

import { BaseButton } from '@/ui/atoms'
import { theme } from '@/styles/theme'

export function PostMenu() {
	return (
		<BaseButton variant="rounded">
			<MoreHorizontal size={24} color={theme.colors['light-gray']} />
		</BaseButton>
	)
}
