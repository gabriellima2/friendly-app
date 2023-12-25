import { useQuery } from './use-query'

import { makePostsService } from '@/services/posts.service'
import type { PostEntity } from '@/entities/post.entity'

const postsService = makePostsService()

export function useGetPosts() {
	return useQuery<PostEntity[]>(postsService.getAll)
}
