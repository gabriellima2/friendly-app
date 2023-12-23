import { faker } from '@faker-js/faker'

import { createFakeAuthor } from './create-fake-author'
import type { StoryEntity } from '@/entities/story.entity'

export function createFakeStory(): StoryEntity {
	return {
		id: faker.string.uuid(),
		imageUrl: faker.image.url({ width: 440, height: 440 }),
		author: createFakeAuthor(),
	}
}
