import { faker } from '@faker-js/faker'

import { createFakeAuthor } from './create-fake-author'
import type { CommentEntity } from '../entities/comment.entity'

export function createFakeComment(): CommentEntity {
	return {
		id: faker.string.uuid(),
		author: createFakeAuthor(),
		content: faker.lorem.lines(1),
	}
}
