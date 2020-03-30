
import * as AWS from 'aws-sdk';

let options = {};

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
  options = {
    region: 'localhost',
	endpoint: 'http://localhost:8000',
	accessKeyId: 'DEFAULT_ACCESS_KEY',  // needed if you don't have aws credentials at all in env
  secretAccessKey: 'DEFAULT_SECRET',
  convertEmptyValues: true
  };
}

const client = new AWS.DynamoDB.DocumentClient(options);

export default client;
