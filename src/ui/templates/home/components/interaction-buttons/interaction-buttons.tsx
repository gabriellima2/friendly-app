import { NotificationButton } from './components/notification-button'
import { MessageButton } from './components/message-button'
import { Box } from '@/ui/atoms'

export function InteractionButtons() {
	return (
		<Box flexDirection="row" gap={4}>
			<NotificationButton />
			<MessageButton />
		</Box>
	)
}
