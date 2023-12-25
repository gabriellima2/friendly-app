import { faker } from '@faker-js/faker'

import { createFakeComment } from './create-fake-comment'
import { createFakeAuthor } from './create-fake-author'

import type { PostEntity } from '@/entities/post.entity'

export function createFakePost(): PostEntity {
	return {
		id: faker.string.uuid(),
		description: faker.lorem.lines(1),
		imageUrl: faker.image.url({ width: 440, height: 440 }),
		author: createFakeAuthor(),
		comments: faker.helpers.multiple(createFakeComment, {
			count: { min: 0, max: 16 },
		}),
		likes: faker.number.int({ min: 0, max: 500 }),
		createdAt: faker.date.past(),
	}
}
