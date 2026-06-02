import {useState} from "react";

function Task6() {

    const [car,setCar] = useState({model:"", year:"", color:""});

    function updateModel(){
        setCar(car=>({...car, model: event.target.value}));
    }

    function updateYear(){
        setCar(car=>({...car, year: event.target.value}));
    }

    function updateColor(){
        setCar(car=>({...car, color: event.target.value}));
    }

    const [foods,setFoods] = useState(["Pizza", "Burger", "Pasta"]);
    function addFood(){
        const newFood = document.getElementById("foodinput").value;
        document.getElementById("foodinput").value = "";
            
        setFoods(f=>[...f, newFood]);
        }

    return(
        <div>
           <p>My fav Car Model:{car.model},  Year:{car.year},  Color:{car.color}</p>
            <input type="text" placeholder="Model" value={car.model} onChange={updateModel}></input><br></br>
            <input type="number" placeholder="Year" value={car.year} onChange={updateYear}></input><br></br>
            <input type="text" placeholder="Color" value={car.color} onChange={updateColor}></input><br></br>
        <ul>
            {foods.map((food,index)=><li key={index}>{food}</li>)}
        </ul>
        <input type="text" id="foodinput" placeholder="Enter a new food item"></input>
        <button onClick={addFood}>Add Food</button>
        </div>
    );
}
export default Task6;