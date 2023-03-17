import axios from 'axios';


export const applicationServiceClient = (baseUrl) => ({

    getUiDefinition: (definitionName: string) => 
        axios.get(`${baseUrl}/ApplicationService/UiDefinition/name/${definitionName}`).then((response) => response.data)

});
