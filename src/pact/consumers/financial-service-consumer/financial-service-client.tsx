import axios from 'axios';

export const financialServiceClient = (baseUrl: string) => ({
    getLoanAmount: (brokerGuid: string, loanMount: string) => 
        axios.get(`${baseUrl}/financequote/application/${brokerGuid}/quote?loanAmount=${loanMount}`)
             .then((response) => response.data)
});
