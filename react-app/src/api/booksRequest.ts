import { validateResponse } from "./validateResponse";

const API_URL = 'https://jsonplaceholder.typicode.com/posts';


export const fetchBooks = () => {
    return fetch(API_URL)
        .then(res => validateResponse(res))
        .then(data => data.json())
};