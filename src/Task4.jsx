import { useState } from "react"

function Task4() {
    const [name,setName] = useState("");
    const [comment,setComment] = useState("");
    const [payment,setPayment] = useState("");
    const [radio,setRadio] = useState("");
    const [color,setColor] = useState("#000000");

    function handleNamechange(){
        setName(event.target.value);
    }
    function handleComment(){
        setComment(event.target.value);
    }
    function handlePayment(){
        setPayment(event.target.value);
    }
    function handleRadio(){
        setRadio(event.target.value);
    }
    function handleColor(event){
        setColor(event.target.value);
    }

    return (
        <div>
            <h1>Task 4: Form Handling</h1>
            <p>Your name is: {name}</p>
            <input value={name} onChange={handleNamechange} ></input>

            <p>Your Comment: {comment}</p>
            <textarea value={comment} onChange={handleComment} placeholder="enter delivery instructions"></textarea>

            <p>Your Payment Method: {payment}</p>
            <select value={payment} onChange={handlePayment}>
                <option value="">Select a payment method</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="PayPal">PayPal</option>
                <option value="Cash">Cash</option>
                <option value="UPI">UPI</option>
            </select>

            <p>Your Delivery Selection: {radio}</p>
            <input type="radio" id="Today" value="Today" checked={radio === "Today"} onChange={handleRadio} />
            <label htmlFor="Today">Today</label>
            <input type="radio" id="Tommorrow" value="Tommorrow" checked={radio === "Tommorrow"} onChange={handleRadio} />
            <label htmlFor="Tommorrow">Tommorrow</label><br></br>
            
            
            <input type="color" value={color} onChange={handleColor} />
            <p>Your selected color: {color}</p>
             
        </div>
    );
}

export default Task4;