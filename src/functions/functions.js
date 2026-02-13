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

async function readBlogPosts(firstIndex, lastIndex){
    const jwt = await userJWT();
    const apiUrl = "https://c01uegcwci.execute-api.ca-central-1.amazonaws.com/default/sql-access"
    try{
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${jwt}`,
            },
            body: JSON.stringify({runMode: "read", firstIndex: firstIndex, lastIndex: lastIndex})
        });
        const data = await response.json();
        return data;
    } catch(error){

    }
}

// id CHAR(36) NOT NULL PRIMARY KEY,
    // #     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    // #     user_id VARCHAR(100) NOT NULL,
    // #     title VARCHAR(255) NOT NULL,
    // #     post LONGTEXT

async function submitBlogPost(blogPost){
    const jwt = await userJWT();
    const apiUrl = "https://c01uegcwci.execute-api.ca-central-1.amazonaws.com/default/sql-access"
    try{
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${jwt}`,
            },
            body: JSON.stringify({runMode: "upsert", blogPost: blogPost})
        });
        const data = await response.json();
        console.log(data)
        return data;
    } catch(error){

    }
}

async function deleteBlogPost(blogPostId){
    const jwt = await userJWT();
    const apiUrl = "https://c01uegcwci.execute-api.ca-central-1.amazonaws.com/default/sql-access"
    try{
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${jwt}`,
            },
            body: JSON.stringify({runMode: "delete", blogPostId: blogPostId})
        });
        const data = await response.json();
        return data;
    } catch(error){

    }
}

export { readBlogPosts, submitBlogPost, deleteBlogPost }

