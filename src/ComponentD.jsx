import React, { useContext } from "react";
import { Usercontext } from "./ComponentA";

function ComponentD(props) {
    const user = useContext(Usercontext);
    return (
        <div className="box">
            <h1>Component D</h1>
            <h2>Hello {user}</h2>
        </div>
    );
}

export default ComponentD;