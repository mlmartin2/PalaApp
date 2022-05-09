import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(Function)

export default function AuthContextProvider(props: any)
{
    return (
        <AuthContext.Provider value={props.value}>
            {props.children}
        </AuthContext.Provider>
    )
}