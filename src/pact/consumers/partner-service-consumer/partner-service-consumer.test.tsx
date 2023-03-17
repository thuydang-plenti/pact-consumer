
import { partnerServiceClient } from './partner-service-client';
import { pactWith } from 'jest-pact';
import { Matchers } from '@pact-foundation/pact';
import { eachLike } from '@pact-foundation/pact/src/v3/matchers';
import { like } from '@pact-foundation/pact/src/dsl/matchers';

pactWith({ consumer: 'PartnerServiceConsumer', provider: 'PartnerServiceProvider', cors: true }, provider => {
  let client;

  beforeEach(() => {
    client = partnerServiceClient(provider.mockService.baseUrl)
  });

  describe('definition endpoint', () => {
    beforeEach(() => 
      provider.addInteraction({
        state: "Given a Partner Definition",
        uponReceiving: 'A request for API Partner Referral Code',
        willRespondWith: {
          status: 200,
          body: like({
            Name:"Driva Staff",
            SearchName:"DRIVASTAFF"
          }),
        },
        withRequest: {
          method: 'GET',
          path: '/Partner/Broker/ReferralCode/DRIVA_STAFF',
        },
      })
    );

    it('returns partner definition', () =>
      client.getPartnerDefinition('DRIVA_STAFF').then(definition => {
        expect(definition).toEqual({
            Name:"Driva Staff",
            SearchName:"DRIVASTAFF"
        });
      }));
  });
});

