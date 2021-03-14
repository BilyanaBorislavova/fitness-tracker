import { useEffect, useState } from 'react';

const fetchResponse = async (url, method, data, options) => {
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

const useFetch = (url, method, data, options) => {
    const [ response, setResponse ] = useState();

    useEffect(() => {
        const res = fetchResponse(url, method, data, options);
        setResponse(res);
    },[ url, method, data, options ]);

    return response;
};

export default useFetch;

