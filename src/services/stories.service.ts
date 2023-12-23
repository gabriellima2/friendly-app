import { stories } from '@/db/stories'
import type { StoryEntity } from '@/entities/story.entity'

class StoriesService {
	async getAll(): Promise<StoryEntity[]> {
		return await new Promise<StoryEntity[]>((resolve) => {
			setTimeout(() => {
				resolve(stories)
			}, 100)
		})
	}
	async getByID(id: string): Promise<StoryEntity> {
		const [findedStory] = stories.filter((story) => story.id === id)
		return await new Promise((resolve, reject) => {
			setTimeout(() => {
				if (!findedStory) return reject(`Story with ID: ${id} was not found!`)
				resolve(findedStory)
			}, 100)
		})
	}
}

export const makeStoriesService = () => new StoriesService()
