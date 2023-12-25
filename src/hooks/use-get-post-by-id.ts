import { useQuery } from './use-query'

import { makePostsService } from '@/services/posts.service'
import type { PostEntity } from '@/entities/post.entity'

const postsService = makePostsService()

export function useGetPosts(id: string) {
	return useQuery<PostEntity>(() => postsService.getByID(id))
}
