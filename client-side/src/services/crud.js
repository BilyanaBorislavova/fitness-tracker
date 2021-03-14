import { HTTP_METHODS } from '../constants/constants';
const { GET, POST, PUT, DELETE } = HTTP_METHODS;

const request = (method) => {
    return async (url, data, options) => {
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data),
            ...options,
        });
        
        return response.json();
    }
};

const get = request(GET);
const post = request(POST);
const put = request(PUT);
const remove = request(DELETE);

export {
    get,
    post,
    put,
    remove,
};
