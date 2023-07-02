import { CognitoIdentityProviderClient } from '@aws-sdk/client-cognito-identity-provider';
import env from '../config/env.config.js';

// -- Create client for cognito -->
const COGNITO_CLIENT = new CognitoIdentityProviderClient({
  region: env.AWS_REGION,
});

export { COGNITO_CLIENT };
