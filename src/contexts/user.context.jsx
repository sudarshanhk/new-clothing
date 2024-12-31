import { createContext, useState, useEffect , useReducer } from "react";

import { onAuthStateChangedListener, signOutUser, createUserDocumentFromAuth } from "../utils/firebase/utilities.firebase";
import { CreateAction } from "../utils/reducer/reducer.utils";
export const UserContext = createContext({

    currentUser: null,
    SetCurrentUser: () => null

});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER"
}
const userReducer = (state, action) => {
    console.log("dispatched");
    console.log(action)
    const { type, payload } = action;
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default: 
            throw new Error(`Unhandled type ${type} in userReducer `) 
    }
}

const INITIAL_STATE = {
    currentUser : null
}
export const UserProvider = ({ children }) => {
   
    // const [currentUser, SetCurrentUser] = useState(null);
    const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
    console.log(currentUser)
    const SetCurrentUser = (user) => {
        dispatch(
            CreateAction(USER_ACTION_TYPES.SET_CURRENT_USER , user)
          )
    }
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