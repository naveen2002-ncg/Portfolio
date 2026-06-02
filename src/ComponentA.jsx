import React, { useState, createContext } from "react";

import ComponentB from "./ComponentB.jsx";  

export const Usercontext = createContext();
function ComponentA() {
        const [user, setUser] = useState("Naveen");

    return (
        <div className="box">
            <h1>Component A</h1>
            <Usercontext.Provider value={user}>
                <ComponentB />
            </Usercontext.Provider>    
        </div>
    );
}

export default ComponentA;