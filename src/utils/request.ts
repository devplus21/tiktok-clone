import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const get = async (url: string, options = {}) => {
    const response = await request.get(url, options);
    return response.data;
};

export const post = async (url: string, data = {}, headers?: any) => {
    const response = await request.post(url, data, headers);
    return response.data;
};


export default request;
