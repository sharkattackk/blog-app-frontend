import React, { createContext, useState, useEffect, useContext } from "react";
import { readBlogPosts } from "./functions/functions";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [latestBlogPost, setLatestBlogPost] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const blogPosts = await readBlogPosts();
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
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;

};

export function useAppContext (){
    return useContext(AppContext)
}