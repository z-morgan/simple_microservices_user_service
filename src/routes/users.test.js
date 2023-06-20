import { Verifier } from '@pact-foundation/pact';
import server from '../index';

test('GET /users/:userId', async () => {
  const options = {
    providerBaseUrl: `http://localhost:${process.env.PORT}`,
    // pactUrls: [process.env.PACT_URL],
    pactBrokerUrl: `http://localhost:9292`,
    publishVerificationResult: true,
    providerVersion: "1.0",
    provider: 'user_service',
    consumerVersionSelectors: [{
      latest: true
    }],
  };
  
  await new Verifier(options).verifyProvider().then(() => {
    server.close();
  });
});
