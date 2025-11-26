import React, { createContext, useState, useEffect, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);

                
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
        posts, setPosts
        
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;

};

export function useAppContext (){
    return useContext(AppContext)
}