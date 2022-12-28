/*
API:
  https://jsonplaceholder.typicode.com/albums
  https://jsonplaceholder.typicode.com/albums/1
  https://jsonplaceholder.typicode.com/albums/1/photos
  https://jsonplaceholder.typicode.com/photos/1
*/

import axios from 'axios';

const BASE = 'https://jsonplaceholder.typicode.com';

export const api = {
	getAllAlbums: async () => {
		let response = await axios.get(`${BASE}/albums`);
		return response.data;
	},

	getAlbum: async (id: string) => {
		let response = await axios.get(`${BASE}/albums/${id}`);
		return response.data;
	},

	getAlbumPhotos: async (id: string) => {
		let response = await axios.get(`${BASE}/albums/${id}/photos`);
		return response.data;
	},

	getPhoto: async (id: string) => {
		let response = await axios.get(`${BASE}/photos/${id}`);
		return response.data;
	},
};
