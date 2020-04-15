
import {
	CognitoUserPool,
	CognitoUser,
	AuthenticationDetails,
	CognitoUserAttribute
} from 'amazon-cognito-identity-js';

export class UserAWSService {
	private poolData = {
		UserPoolId: 'eu-central-1_u3BfmCVHK', // Your user pool id here
		ClientId: '6itvo8r00itphfgt8uudtn151g', // Your client id here
	};
	async save(body: any) {

		var userPool = new CognitoUserPool(this.poolData);

		var attributeList = [];

		var dataEmail = {
			Name: 'email',
			Value: body.email // your email here
		};
		var dataPhoneNumber = {
			Name: 'phone_number',
			Value: body.phone // your phone number here with +country code and no delimiters in front
		};
		var attributeEmail = new CognitoUserAttribute(dataEmail);
		var attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);

		attributeList.push(attributeEmail);
		attributeList.push(attributePhoneNumber);

		var cognitoUser;
		userPool.signUp( body.username', body.password, attributeList, null, function (err, result) {
			if (err) {
				alert(err);
				return;
			}
			cognitoUser = result.user;
			console.log('user name is ' + cognitoUser.getUsername());
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
