import { Heart } from 'lucide-react-native'

import { BaseButton } from './base-button'
import { theme } from '@/styles/theme'

export function LikeButton() {
	return (
		<BaseButton>
			<Heart color={theme.colors['light-gray']} />
		</BaseButton>
	)
}
