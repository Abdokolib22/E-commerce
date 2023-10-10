import { useState } from "react";
import { createContext } from "react";

export let UserContext= createContext();

export default function UserContextProvider(props){

let [uesrToken, setUserToken]=useState(null)

return <UserContext.Provider value={{uesrToken , setUserToken}}>
        {props.children}
    </UserContext.Provider>
}