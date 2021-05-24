import { HttpPost } from "../../services/api-services";
import { BASE_URI, REGISTER } from "../../constants/endpoints";
import UserPool from "../../UserPool";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";

export const register = async (values) => {
    try {
        let apiUrl = BASE_URI + REGISTER;
        //let apiUrl = REGISTER;
        await HttpPost(apiUrl, {
            userDto: {
                loginId: values.loginId,
                password: values.password,
                firstName: values.firstName,
                lastName: values.lastName,
                emailId: values.emailId,
                contactNumber: values.contactNumber
            }
        })
    } catch (e) {
        throw e;
    }
}

export const signup = async (values) => {
    console.log("in signup" + values.loginId);
    // Const attributes: {
    //     email: values.emailId
    // }
    let attributeList = [
        new CognitoUserAttribute({ Name: 'email', Value: values.emailId })
    ];
    UserPool.signUp(values.loginId, values.password, attributeList, null, (err, data) => {
        if (err) {
            console.error(err);
        }
        console.log("after sign up " + data);
    });
}

