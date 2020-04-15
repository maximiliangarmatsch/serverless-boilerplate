
import {
	CognitoUserPool,
	CognitoUser,
	AuthenticationDetails,
	CognitoUserAttribute
} from 'amazon-cognito-identity-js';
import { CognitoIdentityServiceProvider } from 'aws-sdk';

export class UserAWSService {
	private poolData = {
		UserPoolId: 'eu-central-1_u3BfmCVHK', // Your user pool id here
		ClientId: '6itvo8r00itphfgt8uudtn151g', // Your client id here
	};
	async save(body: any) {

		const COGNITO_CLIENT = new CognitoIdentityServiceProvider({
			apiVersion: "2016-04-19",
			region: "us-east-1"
		});

		var userData = {
			UserPoolId: this.poolData.UserPoolId,
			Username: body.email,
			DesiredDeliveryMediums: ["EMAIL"],
			TemporaryPassword: "Abc@321",
			UserAttributes: [
				{
					Name: "email",
					Value: body.email
				},
				{
					Name: "email_verified",
					Value: "true"
				}
			]
		};
		COGNITO_CLIENT.adminCreateUser(userData, (error, data) => {
			console.log(error);
			console.log(data);
		});
	}

	async getOne(body: any) {
		var authenticationDetails = new AuthenticationDetails(
			{ Username: body.username, Password: body.password }
		);

		var userPool = new CognitoUserPool(this.poolData);
		var userData = {
			Username: body.username,
			Pool: userPool,
		};
		var cognitoUser = new CognitoUser(userData);

		const res = await new Promise((resolve, reject) => {
			cognitoUser.authenticateUser(authenticationDetails, {
				onSuccess: function (result) {
					var accessToken = result.getAccessToken().getJwtToken();
					resolve(accessToken)
				},
				newPasswordRequired: function (user, req) {
					cognitoUser.completeNewPasswordChallenge(body.newpassword, {}, {
						onFailure: function (err) {
							reject(err)
						},
						onSuccess: function (res3) {
							resolve(res3)
						}
					})
				},
				onFailure: function (err) {
					reject(err)
				},
			});
		})
		return res
	}

}
