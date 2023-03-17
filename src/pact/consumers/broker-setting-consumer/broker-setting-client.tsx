import axios from 'axios';


export const brokerSettingClient = (baseUrl) => ({

    getBrokerSetting: (brokerGuid: string) => 
        axios.get(`${baseUrl}/broker/brokerSettingInfo/${brokerGuid}`).then((response) => response.data)
});
