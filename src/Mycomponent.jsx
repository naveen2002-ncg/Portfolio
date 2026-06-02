import { useState } from "react"

function MyComponent() {
    const [name,setName] = useState("Guest");
    const [age,setAge] = useState(0);
    const [isStudent,setIsStudent] = useState(false);

    const updateName=()=>{
        setName("Naveen");
    }
    const updateAge=()=>{
        setAge(22);
    }
    const updateIsStudent=()=>{
        setIsStudent(true);
    }
    return(
        <div>
            <p>Hello {name}</p>
            <button onClick={updateName}>Update Name</button>
            <p>Your age is {age}</p>
            <button onClick={updateAge}>Update Age</button>
            <p>Are you a student? {isStudent ? "Yes" : "No"}</p>
            <button onClick={updateIsStudent}>Update Student Status</button>
        </div>
    )
}

export default MyComponent;