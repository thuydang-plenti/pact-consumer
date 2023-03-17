import { workflowServiceClient } from './workflow-service-client';
import { pactWith } from 'jest-pact';
import { Matchers } from '@pact-foundation/pact';

pactWith({ consumer: 'workflowServiceConsumer', provider: 'workflowServiceProvider' }, provider => {
    let client;
  
    beforeEach(() => {
      client = workflowServiceClient(provider.mockService.baseUrl)
    });

    describe('get workflow definition', () => {
        beforeEach(() => 
          provider.addInteraction({
            state: "Given borrower journey workflow Definition",
            uponReceiving: 'A request to workflow Definition',
            willRespondWith: {
              status: 200,
              body: Matchers.like({
                id: 2000,
                name: "RateSetter Borrower Application (v2)",
                type: "BorrowerApplication",
                steps: [
                    {
                        name: "RateEstimate",
                        default: true
                    },
                    {
                        name: "InTriage",
                        default: false
                    },
                    {
                        name: "RateEstimateResult",
                        default: false
                    },
                    {
                        name: "FullApplication",
                        default: false
                    },
                    {
                        name: "Identity",
                        default: false
                    },
                    {
                        name: "BankDetails",
                        default: false
                    },
                    {
                        name: "ApplicationReceived",
                        default: false
                    },
                    {
                        name: "Refer",
                        default: false
                    },
                    {
                        name: "ReferFullApplication",
                        default: false
                    },
                    {
                        name: "NoCreditFile",
                        default: false
                    },
                    {
                        name: "NotEligible",
                        default: false
                    },
                    {
                        name: "ApplicationCanceled",
                        default: false
                    },
                    {
                        name: "ApplicationAbandoned",
                        default: false
                    },
                    {
                        name: "AutomatedDecisioning",
                        default: false
                    },
                    {
                        name: "ConditionallyApprovedIdentity",
                        default: false
                    },
                    {
                        name: "ConditionallyApprovedBankDetails",
                        default: false
                    },
                    {
                        name: "ConditionallyApprovedApplicationReceived",
                        default: false
                    }
                ],
                _links: {
                    self: {
                        href: "/definition/2000"
                    },
                    RateEstimate: {
                        href: "RateEstimate"
                    },
                    InTriage: {
                        href: "Processing"
                    },
                    RateEstimateResult: {
                        href: "RateEstimateResult"
                    },
                    FullApplication: {
                        href: "FullApplication"
                    },
                    Identity: {
                        href: "Identity"
                    },
                    BankDetails: {
                        href: "BankDetails"
                    },
                    ApplicationReceived: {
                        href: "ApplicationReceived"
                    },
                    Refer: {
                        href: "Refer"
                    },
                    ReferFullApplication: {
                        href: "ReferFullApplication"
                    },
                    NoCreditFile: {
                        href: "NoCreditFile"
                    },
                    NotEligible: {
                        href: "NotEligible"
                    },
                    ApplicationCanceled: {
                        href: "ApplicationWithdrawn"
                    },
                    ApplicationAbandoned: {
                        href: "ApplicationWithdrawn"
                    },
                    AutomatedDecisioning: {
                        href: null
                    },
                    ConditionallyApprovedIdentity: {
                        href: null
                    },
                    ConditionallyApprovedBankDetails: {
                        href: null
                    },
                    ConditionallyApprovedApplicationReceived: {
                        href: null
                    }
                }
            }),
            },
            withRequest: {
              method: 'GET',
              path: '/WorkflowService/Definition/beeca942-a7a5-4192-b48c-3f9a24995e45/1',
            },
          })
        );
    
        it('return definition', () => // implicit return again
          client.getDefinition('beeca942-a7a5-4192-b48c-3f9a24995e45').then(definition => {
            expect(definition).toEqual({
                id: 2000,
                name: "RateSetter Borrower Application (v2)",
                type: "BorrowerApplication",
                steps: [
                    {
                        name: "RateEstimate",
                        default: true
                    },
                    {
                        name: "InTriage",
                        default: false
                    },
                    {
                        name: "RateEstimateResult",
                        default: false
                    },
                    {
                        name: "FullApplication",
                        default: false
                    },
                    {
                        name: "Identity",
                        default: false
                    },
                    {
                        name: "BankDetails",
                        default: false
                    },
                    {
                        name: "ApplicationReceived",
                        default: false
                    },
                    {
                        name: "Refer",
                        default: false
                    },
                    {
                        name: "ReferFullApplication",
                        default: false
                    },
                    {
                        name: "NoCreditFile",
                        default: false
                    },
                    {
                        name: "NotEligible",
                        default: false
                    },
                    {
                        name: "ApplicationCanceled",
                        default: false
                    },
                    {
                        name: "ApplicationAbandoned",
                        default: false
                    },
                    {
                        name: "AutomatedDecisioning",
                        default: false
                    },
                    {
                        name: "ConditionallyApprovedIdentity",
                        default: false
                    },
                    {
                        name: "ConditionallyApprovedBankDetails",
                        default: false
                    },
                    {
                        name: "ConditionallyApprovedApplicationReceived",
                        default: false
                    }
                ],
                _links: {
                    self: {
                        href: "/definition/2000"
                    },
                    RateEstimate: {
                        href: "RateEstimate"
                    },
                    InTriage: {
                        href: "Processing"
                    },
                    RateEstimateResult: {
                        href: "RateEstimateResult"
                    },
                    FullApplication: {
                        href: "FullApplication"
                    },
                    Identity: {
                        href: "Identity"
                    },
                    BankDetails: {
                        href: "BankDetails"
                    },
                    ApplicationReceived: {
                        href: "ApplicationReceived"
                    },
                    Refer: {
                        href: "Refer"
                    },
                    ReferFullApplication: {
                        href: "ReferFullApplication"
                    },
                    NoCreditFile: {
                        href: "NoCreditFile"
                    },
                    NotEligible: {
                        href: "NotEligible"
                    },
                    ApplicationCanceled: {
                        href: "ApplicationWithdrawn"
                    },
                    ApplicationAbandoned: {
                        href: "ApplicationWithdrawn"
                    },
                    AutomatedDecisioning: {
                        href: null
                    },
                    ConditionallyApprovedIdentity: {
                        href: null
                    },
                    ConditionallyApprovedBankDetails: {
                        href: null
                    },
                    ConditionallyApprovedApplicationReceived: {
                        href: null
                    }
                }
            });
          }));
      });

      describe('get manifest definition', () => {
        beforeEach(() => 
          provider.addInteraction({
            state: "Given borrower journey workflow manifest Definition",
            uponReceiving: 'A request to workflow manifest Definition',
            willRespondWith: {
              status: 200,
              body: Matchers.like({
                id: "4a3f5ba1-f6b5-4fc1-b54b-dccce6d7991f",
                partnerId: "beeca942-a7a5-4192-b48c-3f9a24995e45",
                isDeleted: false,
                author: null,
                created: 636892370540000000,
                lastModified: 637963275602221657,
                configurations: [
                    {
                        id: "dbaedb02-0088-4ae8-add8-49ffd98ebbd5",
                        applicationModel: "borrowerApplication",
                        uiDefinitionPrefix: "",
                        brokerManifestControlTargets: [
                            "ExperimentalIndentityImageEnabled"
                        ],
                        experience: "Standard",
                        context: "BorrowerApplication",
                        isDefault: true,
                        type: "All",
                        cobranding: null
                    },
                    {
                        id: "32db5a3e-422b-41b1-a213-e14152e6c3cf",
                        applicationModel: "greenBorrowerApplication",
                        uiDefinitionPrefix: "greenBorrower",
                        brokerManifestControlTargets: null,
                        experience: "Green",
                        context: "BorrowerApplication",
                        isDefault: false,
                        type: "All",
                        cobranding: null
                    },
                    {
                        id: "7cbf5920-1b0b-448a-a55d-be323038fc4e",
                        applicationModel: "greenBrokerBorrowerApplication",
                        uiDefinitionPrefix: "greenBrokerBorrower",
                        brokerManifestControlTargets: null,
                        experience: "Green",
                        context: "BrokerBorrowerApplication",
                        isDefault: false,
                        type: "All",
                        cobranding: null
                    },
                    {
                        id: "dce9121e-97ee-4220-9581-d5cdafb412c2",
                        applicationModel: "saRenewableEnergyBorrowerApplication",
                        uiDefinitionPrefix: "saRenewableEnergyBorrower",
                        brokerManifestControlTargets: null,
                        experience: "SARenewableEnergy",
                        context: "BorrowerApplication",
                        isDefault: false,
                        type: "All",
                        cobranding: null
                    },
                    {
                        id: "2743fe75-609d-415a-898b-ff3faa79764f",
                        applicationModel: "saRenewableEnergyBrokerBorrowerApplication",
                        uiDefinitionPrefix: "saRenewableEnergyBrokerBorrower",
                        brokerManifestControlTargets: null,
                        experience: "SARenewableEnergy",
                        context: "BrokerBorrowerApplication",
                        isDefault: false,
                        type: "All",
                        cobranding: null
                    }
                ],
                _links: {
                    self: {
                        href: "/manifest/4a3f5ba1-f6b5-4fc1-b54b-dccce6d7991f"
                    },
                    standard_borrowerapplication: {
                        href: "/manifest/4a3f5ba1-f6b5-4fc1-b54b-dccce6d7991f/configuration/dbaedb02-0088-4ae8-add8-49ffd98ebbd5"
                    },
                    green_borrowerapplication: {
                        href: "/manifest/4a3f5ba1-f6b5-4fc1-b54b-dccce6d7991f/configuration/32db5a3e-422b-41b1-a213-e14152e6c3cf"
                    },
                    green_brokerborrowerapplication: {
                        href: "/manifest/4a3f5ba1-f6b5-4fc1-b54b-dccce6d7991f/configuration/7cbf5920-1b0b-448a-a55d-be323038fc4e"
                    },
                    sarenewableenergy_borrowerapplication: {
                        href: "/manifest/4a3f5ba1-f6b5-4fc1-b54b-dccce6d7991f/configuration/dce9121e-97ee-4220-9581-d5cdafb412c2"
                    },
                    sarenewableenergy_brokerborrowerapplication: {
                        href: "/manifest/4a3f5ba1-f6b5-4fc1-b54b-dccce6d7991f/configuration/2743fe75-609d-415a-898b-ff3faa79764f"
                    }
                }
            }),
            },
            withRequest: {
              method: 'GET',
              path: '/WorkflowService/Manifest/partner/beeca942-a7a5-4192-b48c-3f9a24995e45/Standard',
            },
          })
        );
    
        it('return definition', () => // implicit return again
          client.getManifest('beeca942-a7a5-4192-b48c-3f9a24995e45').then(definition => {
            expect(definition).toEqual({
                id: "4a3f5ba1-f6b5-4fc1-b54b-dccce6d7991f",
                partnerId: "beeca942-a7a5-4192-b48c-3f9a24995e45",
                isDeleted: false,
                author: null,
                created: 636892370540000000,
                lastModified: 637963275602221657,
                configurations: [
                    {
                        id: "dbaedb02-0088-4ae8-add8-49ffd98ebbd5",
                        applicationModel: "borrowerApplication",
                        uiDefinitionPrefix: "",
                        brokerManifestControlTargets: [
                            "ExperimentalIndentityImageEnabled"
                        ],
                        experience: "Standard",
                        context: "BorrowerApplication",
                        isDefault: true,
                        type: "All",
                        cobranding: null
                    },
                    {
                        id: "32db5a3e-422b-41b1-a213-e14152e6c3cf",
                        applicationModel: "greenBorrowerApplication",
                        uiDefinitionPrefix: "greenBorrower",
                        brokerManifestControlTargets: null,
                        experience: "Green",
                        context: "BorrowerApplication",
                        isDefault: false,
                        type: "All",
                        cobranding: null
                    },
                    {
                        id: "7cbf5920-1b0b-448a-a55d-be323038fc4e",
                        applicationModel: "greenBrokerBorrowerApplication",
                        uiDefinitionPrefix: "greenBrokerBorrower",
                        brokerManifestControlTargets: null,
                        experience: "Green",
                        context: "BrokerBorrowerApplication",
                        isDefault: false,
                        type: "All",
                        cobranding: null
                    },
                    {
                        id: "dce9121e-97ee-4220-9581-d5cdafb412c2",
                        applicationModel: "saRenewableEnergyBorrowerApplication",
                        uiDefinitionPrefix: "saRenewableEnergyBorrower",
                        brokerManifestControlTargets: null,
                        experience: "SARenewableEnergy",
                        context: "BorrowerApplication",
                        isDefault: false,
                        type: "All",
                        cobranding: null
                    },
                    {
                        id: "2743fe75-609d-415a-898b-ff3faa79764f",
                        applicationModel: "saRenewableEnergyBrokerBorrowerApplication",
                        uiDefinitionPrefix: "saRenewableEnergyBrokerBorrower",
                        brokerManifestControlTargets: null,
                        experience: "SARenewableEnergy",
                        context: "BrokerBorrowerApplication",
                        isDefault: false,
                        type: "All",
                        cobranding: null
                    }
                ],
                _links: {
                    self: {
                        href: "/manifest/4a3f5ba1-f6b5-4fc1-b54b-dccce6d7991f"
                    },
                    standard_borrowerapplication: {
                        href: "/manifest/4a3f5ba1-f6b5-4fc1-b54b-dccce6d7991f/configuration/dbaedb02-0088-4ae8-add8-49ffd98ebbd5"
                    },
                    green_borrowerapplication: {
                        href: "/manifest/4a3f5ba1-f6b5-4fc1-b54b-dccce6d7991f/configuration/32db5a3e-422b-41b1-a213-e14152e6c3cf"
                    },
                    green_brokerborrowerapplication: {
                        href: "/manifest/4a3f5ba1-f6b5-4fc1-b54b-dccce6d7991f/configuration/7cbf5920-1b0b-448a-a55d-be323038fc4e"
                    },
                    sarenewableenergy_borrowerapplication: {
                        href: "/manifest/4a3f5ba1-f6b5-4fc1-b54b-dccce6d7991f/configuration/dce9121e-97ee-4220-9581-d5cdafb412c2"
                    },
                    sarenewableenergy_brokerborrowerapplication: {
                        href: "/manifest/4a3f5ba1-f6b5-4fc1-b54b-dccce6d7991f/configuration/2743fe75-609d-415a-898b-ff3faa79764f"
                    }
                }
            });
          }));
      });
});