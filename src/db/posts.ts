import { faker } from '@faker-js/faker'

import { createFakePost } from '@/lib/create-fake-post'
import type { PostEntity } from '@/entities/post.entity'

export const posts: PostEntity[] = faker.helpers.multiple(createFakePost, {
	count: 16,
})
