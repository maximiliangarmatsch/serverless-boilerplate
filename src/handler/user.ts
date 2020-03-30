import { APIGatewayEvent } from 'aws-lambda';
import { UserController } from '../controller/user.controller';

export const handler = async (event: APIGatewayEvent) => {
  try {
    const controller: UserController = new UserController(event);
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