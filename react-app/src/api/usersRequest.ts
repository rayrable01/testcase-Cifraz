import { validateResponse } from "./validateResponse";

const API_URL = 'https://jsonplaceholder.typicode.com/todos';


export const fetchUsers = () => {
    return fetch(API_URL)
        .then(res => validateResponse(res))
        .then(data => data.json())
};