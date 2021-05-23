import { HttpGet } from "../../services/api-services";
import { BASE_URI, AUTHENTICATE } from "../../constants/endpoints";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../../UserPool";
export const authenticate = async (email, password) => {
    try {
        const user = new CognitoUser({
            Username: email,
            Pool: UserPool,
        });
        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
        });
        return new Promise(function (resolve, reject) {
            user.authenticateUser(authDetails, {
                onSuccess: resolve,
                onFailure: reject,
            });
        });
    } catch (e) {
        throw e;
    }
}