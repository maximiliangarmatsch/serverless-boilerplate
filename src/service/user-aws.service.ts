
import {
	CognitoUserPool,
	CognitoUser,
	AuthenticationDetails
} from 'amazon-cognito-identity-js';

export class UserAWSService {

	async getOne(body: any) {
		var authenticationDetails = new AuthenticationDetails(
			{ Username: body.username, Password: body.password }
		);
		var poolData = {
			UserPoolId: 'eu-central-1_u3BfmCVHK', // Your user pool id here
			ClientId: '6itvo8r00itphfgt8uudtn151g', // Your client id here
		};
		var userPool = new CognitoUserPool(poolData);
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