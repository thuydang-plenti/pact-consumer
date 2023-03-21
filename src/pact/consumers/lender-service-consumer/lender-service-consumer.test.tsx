
import { pactWith } from 'jest-pact';
import { Matchers } from '@pact-foundation/pact';
import { lenderServiceClient } from './lender-service-client';

pactWith({ consumer: 'LenderServiceConsumer', provider: 'LenderServiceProvider' }, provider => {
  let client;

  beforeEach(() => {
    client = lenderServiceClient(provider.mockService.baseUrl)
  });

  describe('get Lender', () => {
    beforeEach(() => 
      provider.addInteraction({
        state: "Given Lender",
        uponReceiving: 'A request to get Lender',
        willRespondWith: {
          status: 200,
          body: Matchers.like({
            Id: "3d3a1e01-5832-4ba1-9bd9-c767c737afd9",
            Errors: {},
            IsCompleted: false,
            Type: 0,
            _links: [
              {
                Rel: "",
                Href: "/application/3d3a1e01-5832-4ba1-9bd9-c767c737afd9",
              },
            ],
          }),
        },
        withRequest: {
          method: 'GET',
          path: '/lenderApplication'
        },
      })
    );

    it('returns server health', () => // implicit return again
      client.getLender().then(definition => {
        expect(definition).toEqual({
            Id: "3d3a1e01-5832-4ba1-9bd9-c767c737afd9",
            Errors: {},
            IsCompleted: false,
            Type: 0,
            _links: [
              {
                Rel: "",
                Href: "/application/3d3a1e01-5832-4ba1-9bd9-c767c737afd9",
              },
            ],
          });
      }));
  });
});