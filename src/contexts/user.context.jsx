import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener, signOutUser, createUserDocumentFromAuth } from "../utils/firebase/utilities.firebase";

export const UserContext = createContext({

    currentUser: null,
    SetCurrentUser: () => null

});

export const UserProvider = ({ children }) => {
   
    const [currentUser, SetCurrentUser] = useState(null);

    const value = { currentUser, SetCurrentUser }
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            console.log(user);
            if (user) {
                createUserDocumentFromAuth()
            }
            SetCurrentUser(user);
        });
        return unsubscribe;
    }, [])

    return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}