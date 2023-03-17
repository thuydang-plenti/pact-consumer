import axios from 'axios';


export const partnerServiceClient = (baseUrl) => ({

    getPartnerDefinition: (referralCode: string) => 
        axios.get(`${baseUrl}/Partner/Broker/ReferralCode/${referralCode}`).then((response) => response.data)

});
