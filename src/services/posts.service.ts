import { posts } from '@/db/posts'
import { PostEntity } from '@/entities/post.entity'

class PostsService {
	async getAll(): Promise<PostEntity[]> {
		return await new Promise<PostEntity[]>((resolve) => {
			setTimeout(() => {
				resolve(posts)
			}, 100)
		})
	}
	async getByID(id: string): Promise<PostEntity> {
		const [findedPost] = posts.filter((post) => post.id === id)
		return await new Promise((resolve, reject) => {
			setTimeout(() => {
				if (!findedPost) return reject(`Post with ID: ${id} was not found!`)
				resolve(findedPost)
			}, 100)
		})
	}
}

export const makePostsService = () => new PostsService()
