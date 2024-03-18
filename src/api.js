import axios from 'axios';

const client = axios.create({
    baseURL: 'https://api.outsidein.dev/Hzr3j2J6fSMbzkeKpXjE9ZRgcqH46NWo',
});

const api = {
    async loadRestaurants() {
        const response = await client.get('/restaurants');
        return response.data;
    },
};

export default api;
