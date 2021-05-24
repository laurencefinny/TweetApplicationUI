import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "ap-south-1_WFaKUwJ8T",
    ClientId: "dnacrg2odrgsv9p1p2l9sd78r"
}

export default new CognitoUserPool(poolData);