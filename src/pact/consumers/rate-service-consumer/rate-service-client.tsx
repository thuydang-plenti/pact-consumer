import axios from 'axios';

export const rateServiceClient = (baseUrl: string) => ({
    getRates: () => {
        return axios.get(`${baseUrl}/Rates/OriginationTiers`)
             .then((response) => response.data)
    },
    getRateProfile: (applicationId: string, experienceType: string, vehicleCategory: string) => {
        return axios.get(`${baseUrl}/Rates/Profile?applicationId=${applicationId}&experienceType=${experienceType}&vehicleCategory=${vehicleCategory}`)
             .then((response) => response.data)
    }
});
