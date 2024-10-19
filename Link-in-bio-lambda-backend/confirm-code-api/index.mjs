import AWS from 'aws-sdk';

// Instantiate the Cognito service provider
const cognito = new AWS.CognitoIdentityServiceProvider();

export const handler = async (event) => {
  console.log('Full Event:', JSON.stringify(event, null, 2));

  let body;

  // Parse event.body (stringified JSON)
  try {
    body = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid JSON format in request body.' }),
    };
  }

  // Extract email and confirmation code from the parsed body
  const { email, confirmationCode } = body;

  // Validate input
  if (!email || !confirmationCode) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Email and confirmation code are required.' }),
    };
  }

  // Cognito confirm sign-up parameters
  const confirmSignUpParams = {
    ClientId: process.env.COGNITO_CLIENT_ID,  // Cognito App Client ID from environment variables
    Username: email,
    ConfirmationCode: confirmationCode,
  };

  try {
    // Confirm the sign-up using the confirmation code
    await cognito.confirmSignUp(confirmSignUpParams).promise();

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email confirmed successfully! Your account is now active.' }),
    };
  } catch (error) {
    console.error('Error during email confirmation:', error);

    // Return error message
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};