import axios from 'axios';

export const lenderServiceClient = (baseUrl: string) => ({
    getLender: () => 
        axios.get(`${baseUrl}/lenderApplication`).then((response) => response.data),
    postLender: () => 
        axios.get(`${baseUrl}/lenderApplication/*`).then((response) => response.data)
});
