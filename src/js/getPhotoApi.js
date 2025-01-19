import { makeMarkup } from "./markup";

const APIKey = '47745084-1e5dd425147376e08b27d9920';

export const getPhoto = (page) => { 
	const API = `https://pixabay.com/api/?key=${APIKey}&per_page=4&page=${page}`; 
	return fetch(API).then(data => data.json()).then(data => makeMarkup(data))
}
