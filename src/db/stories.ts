import { faker } from '@faker-js/faker'

import { createFakeStory } from '@/lib/create-fake-story'
import type { StoryEntity } from '@/entities/story.entity'

export const stories: StoryEntity[] = faker.helpers.multiple(createFakeStory, {
	count: 16,
})
