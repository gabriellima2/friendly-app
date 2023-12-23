import { useQuery } from './use-query'

import { makeStoriesService } from '@/services/stories.service'
import type { StoryEntity } from '@/entities/story.entity'

const storiesService = makeStoriesService()

export function useGetStories() {
	return useQuery<StoryEntity[]>(storiesService.getAll)
}
