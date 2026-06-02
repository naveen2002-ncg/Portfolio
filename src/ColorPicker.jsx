import { useState } from "react";
import "./index.css";

function ColorPicker() {
  const colors = [
    "orange",
    "white",
    "green",
    "maroon",
    "blue",
    "yellow",
    "purple",
  ];

  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div className="container">
      <h1>Color Picker:</h1>

      {/* <div className="color-box">
        <button className="select-btn">
          Select Color
        </button> */}

        <div className="color-list">
          {colors.map((color) => (
            <div
              key={color} className={`circle ${
                selectedColor === color ? "active" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>

        <p>Selected Color: {selectedColor}</p>
      </div>
    // </div>
  );
}

export default ColorPicker;

 
