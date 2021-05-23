import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "ap-south-1_x2zpK8buI",
    ClientId: "6ri0psirkgathtmke34dsjs75k"
}

export default new CognitoUserPool(poolData);