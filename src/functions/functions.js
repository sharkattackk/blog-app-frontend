import { fetchAuthSession } from "aws-amplify/auth";


async function userJWT(){
    try{
        const authToken = (await fetchAuthSession()).tokens?.idToken?.toString();
        return authToken
    } catch(error){
        console.error(" me CYANT get the auth Token");
        throw error;
    }
}


export { userJWT }