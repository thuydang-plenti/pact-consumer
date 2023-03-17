import axios from 'axios';


export const workflowServiceClient = (baseUrl) => ({

    getDefinition: (partnerId: string) => 
        axios.get(`${baseUrl}/WorkflowService/Definition/${partnerId}/1`).then((response) => response.data),
    
    getManifest: (partnerId: string) => 
        axios.get(`${baseUrl}/WorkflowService/Manifest/partner/${partnerId}/Standard`).then((response) => response.data)

});
