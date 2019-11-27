export default class TestService {

	_apiBase = 'https://jsonplaceholder.typicode.com';

	getResourse = async (url) => {
		const response = await fetch(`${this._apiBase}${url}`);
		if (!response.ok) {
			throw new Error(`Can't fetch ${url}, received ${response.status}`)
		}
		return response.json()
	}

	getAllUsers = async () => {
		const response = await this.getResourse('/users/')
		return response;
	}

	getUser = async (id) => {
		const response = await this.getResourse(`/users/${id}`);
		return response
	}

	getUserAlbums = async (id) => {
		const response = await this.getResourse(`/albums?userId=${id}`);
		return response
	}

	getUserPosts = async (id) => {
		const response = await this.getResourse(`/posts?userId=${id}`);
		return response;
	}
}