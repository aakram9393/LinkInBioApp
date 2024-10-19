import AWS from 'aws-sdk';

// Instantiate the Cognito service provider
const cognito = new AWS.CognitoIdentityServiceProvider();

export const handler = async (event) => {
  console.log('Full Event:', JSON.stringify(event, null, 2));

  let body;

  // Parse event.body (stringified JSON)
  try {
    body = JSON.parse(event.body); // Parse the JSON string in event.body
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid JSON format in request body.' }),
    };
  }

  // Extract email, password, firstName, and lastName from the parsed body
  const { email, password, firstName, lastName } = body;

  // Validate input
  if (!email || !password || !firstName || !lastName) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'All fields are required' }),
    };
  }

  // Generate a unique username, e.g., using firstName + lastName or another pattern
  const username = `${firstName}.${lastName}`.toLowerCase();

  // Cognito sign-up parameters
  const signUpParams = {
    ClientId: process.env.COGNITO_CLIENT_ID, // Cognito App Client ID from environment variables
    Username: username,  // Use a non-email value for Username
    Password: password,
    UserAttributes: [
      {
        Name: 'email',
        Value: email,
      },
      {
        Name: 'given_name',
        Value: firstName,
      },
      {
        Name: 'family_name',
        Value: lastName,
      },
    ],
  };

  try {
    // Sign up the user in Cognito
    await cognito.signUp(signUpParams).promise();

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Registration successful! Please check your email for confirmation.' }),
    };
  } catch (error) {
    console.error('Error during registration:', error);

    // Return error message
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};