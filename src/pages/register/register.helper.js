import { HttpPost } from "../../services/api-services";
import { BASE_URI, REGISTER } from "../../constants/endpoints";
import UserPool from "../../UserPool";

export const register = async (values) => {
    try {
        //let apiUrl = BASE_URI + REGISTER;
        let apiUrl = REGISTER;
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
    UserPool.signUp(values.loginId, values.password, [], null, (err, data) => {
        if (err) {
            console.error(err);
        }
        console.log(data);
    });
}

