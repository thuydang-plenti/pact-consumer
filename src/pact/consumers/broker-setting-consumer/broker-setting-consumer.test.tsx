
import { pactWith } from 'jest-pact';
import { Matchers } from '@pact-foundation/pact';
import { brokerSettingClient } from './broker-setting-client';

pactWith({ consumer: 'BrokerSettingConsumer', provider: 'BrokerSettingProvider' }, provider => {
  let client;

  beforeEach(() => {
    client = brokerSettingClient(provider.mockService.baseUrl)
  });

  describe('get rate estimate ui definition', () => {
    beforeEach(() => 
      provider.addInteraction({
        state: "Given a BorrowerJourney Broker Setting",
        uponReceiving: 'A request to Get Broker UI Definition',
        willRespondWith: {
          status: 200,
          body: Matchers.like({
            Name: "RateSetter New",
            ReferralCode: "RS_NEW",
            Experience: "Standard",
            IsAutoCommercialBroker: false,
            IsAutoConsumerBroker: false,
            IsAutoConsumerDirectBroker: false,
            IsAutoPremiumBroker: false,
            IsAutoClassicBroker: false,
            IsAutoBroker: false,
            IsRefinanceBroker: false,
            AllowExtraBrokerValidation: true,
            MaxBrokerageOverride: null,
            RequireInsuranceInCommercialContract: false,
            AutoPartner: "",
            IsContractLoanDecouplingEnabled: false,
            HasSettlementWorkflow: true,
            HasPartnerIntegrationWorkflow: false,
          }),
        },
        withRequest: {
          method: 'GET',
          path: '/broker/brokerSettingInfo/beeca942-a7a5-4192-b48c-3f9a24995e45',
        },
      })
    );

    it('returns server health', () => // implicit return again
      client.getBrokerSetting('beeca942-a7a5-4192-b48c-3f9a24995e45').then(definition => {
        expect(definition).toEqual({
            Name: "RateSetter New",
            ReferralCode: "RS_NEW",
            Experience: "Standard",
            IsAutoCommercialBroker: false,
            IsAutoConsumerBroker: false,
            IsAutoConsumerDirectBroker: false,
            IsAutoPremiumBroker: false,
            IsAutoClassicBroker: false,
            IsAutoBroker: false,
            IsRefinanceBroker: false,
            AllowExtraBrokerValidation: true,
            MaxBrokerageOverride: null,
            RequireInsuranceInCommercialContract: false,
            AutoPartner: "",
            IsContractLoanDecouplingEnabled: false,
            HasSettlementWorkflow: true,
            HasPartnerIntegrationWorkflow: false,
          });
      }));
  });
});
