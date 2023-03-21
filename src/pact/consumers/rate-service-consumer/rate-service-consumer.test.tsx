
import { pactWith } from 'jest-pact';
import { Matchers } from '@pact-foundation/pact';
import { rateServiceClient } from './rate-service-client';

pactWith({ consumer: 'RateServiceConsumer', provider: 'RateServiceProvider' }, provider => {
  let client;

  beforeEach(() => {
    client = rateServiceClient(provider.mockService.baseUrl)
  });

  describe('get rates', () => {
    beforeEach(() => 
      provider.addInteraction({
        state: "Given Rate",
        uponReceiving: 'A request to get rate',
        willRespondWith: {
          status: 200,
          body: Matchers.like([
            {
              minLoanAmount: { currency: { Prefix: "$" }, value: 0 },
              maxLoanAmount: { currency: { Prefix: "$" }, value: 999999 },
              maxOriginationFee: { currency: { Prefix: "$" }, value: 99000 },
            },
            {
              minLoanAmount: { currency: { Prefix: "$" }, value: 1000000 },
              maxLoanAmount: { currency: { Prefix: "$" }, value: 1999999 },
              maxOriginationFee: { currency: { Prefix: "$" }, value: 150000 },
            },
            {
              minLoanAmount: { currency: { Prefix: "$" }, value: 2000000 },
              maxLoanAmount: { currency: { Prefix: "$" }, value: 3499999 },
              maxOriginationFee: { currency: { Prefix: "$" }, value: 200000 },
            },
            {
              minLoanAmount: { currency: { Prefix: "$" }, value: 3500000 },
              maxLoanAmount: {
                currency: { Prefix: "$" },
                value: 9223372036854775807,
              },
              maxOriginationFee: { currency: { Prefix: "$" }, value: 250000 },
            },
          ]),
        },
        withRequest: {
          method: 'GET',
          path: '/Rates/OriginationTiers'
        },
      })
    );

    it('returns server health', () => // implicit return again
      client.getRates().then(definition => {
        expect(definition).toEqual([
            {
              minLoanAmount: { currency: { Prefix: "$" }, value: 0 },
              maxLoanAmount: { currency: { Prefix: "$" }, value: 999999 },
              maxOriginationFee: { currency: { Prefix: "$" }, value: 99000 },
            },
            {
              minLoanAmount: { currency: { Prefix: "$" }, value: 1000000 },
              maxLoanAmount: { currency: { Prefix: "$" }, value: 1999999 },
              maxOriginationFee: { currency: { Prefix: "$" }, value: 150000 },
            },
            {
              minLoanAmount: { currency: { Prefix: "$" }, value: 2000000 },
              maxLoanAmount: { currency: { Prefix: "$" }, value: 3499999 },
              maxOriginationFee: { currency: { Prefix: "$" }, value: 200000 },
            },
            {
              minLoanAmount: { currency: { Prefix: "$" }, value: 3500000 },
              maxLoanAmount: {
                currency: { Prefix: "$" },
                value: 9223372036854775807,
              },
              maxOriginationFee: { currency: { Prefix: "$" }, value: 250000 },
            },
          ]);
      }));
  });

  describe('get rates profile', () => {
    beforeEach(() => 
      provider.addInteraction({
        state: "Given Rate Profile",
        uponReceiving: 'A request to get rate profile',
        willRespondWith: {
          status: 200,
          body: Matchers.like({ MaxTerm: 84, MinAmount: 200100, MaxAmount: 5000000 }),
        },
        withRequest: {
          method: 'GET',
          path: '/Rates/Profile',
          query: { 
            applicationId: '3d3a1e01-5832-4ba1-9bd9-c767c737afd9',
            experienceType: 'Standard',
            vehicleCategory: 'Car'
          },
        },
      })
    );

    it('returns server health', () => // implicit return again
      client.getRateProfile('3d3a1e01-5832-4ba1-9bd9-c767c737afd9', 'Standard', 'Car').then(definition => {
        expect(definition).toEqual({ MaxTerm: 84, MinAmount: 200100, MaxAmount: 5000000 });
      }));
  });
});
