import { APIGatewayEvent } from 'aws-lambda';
import { UserAWSController } from '../controller/user-aws.controller';

export const handler = async (event: APIGatewayEvent) => {
  try {
	const controller: UserAWSController = new UserAWSController(event);
	const response = await controller.redirectByMethod(event.httpMethod);
    return {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(response),
      statusCode: 200,
    };
  } catch (e) {
    console.log(e)
  }
};