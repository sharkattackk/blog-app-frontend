import React, { createContext, useState, useEffect, useContext } from "react";
import { readBlogPosts } from "./functions/functions";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const blogPosts = await readBlogPosts();
                setPosts(blogPosts);
                
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
        posts, setPosts,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;

};

export function useAppContext (){
    return useContext(AppContext)
}