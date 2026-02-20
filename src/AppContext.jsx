import React, { createContext, useState, useEffect, useContext } from "react";
import { readBlogPosts } from "./functions/functions";
import { getCurrentUser } from "aws-amplify/auth";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [latestBlogPost, setLatestBlogPost] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const blogPosts = await readBlogPosts();
                try{
                    const user = await getCurrentUser();
                    if(user){
                        setUser(user)
                    }
                }catch{
                    console.log("No Authed")
                }
                
                setPosts(blogPosts);
                setLatestBlogPost(blogPosts[0]);
                
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch initial app data:", error);
            }
        }

        fetchData();
    }, []);

    // if (loading) {
    //     return <Fallback main={true} />;
    // }

    const value = {
        loading,
        posts, setPosts,
        latestBlogPost,
        scrolled, setScrolled,
        user, setUser
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;

};

export function useAppContext (){
    return useContext(AppContext)
}