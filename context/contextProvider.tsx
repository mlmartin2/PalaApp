import { createContext, useState } from "react";

export const AuthContext = createContext({})

export default function AuthContextProvider(props: any)
{
    const [user,setUser] = useState(undefined)
    
    return (
        <AuthContext.Provider value={[user,setUser]} >
            {props.children}
        </AuthContext.Provider>
    )
}