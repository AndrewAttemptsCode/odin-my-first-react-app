import { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

export default function ColorApp() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [backgroundCounter, setBackgroundCounter] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    setBackgroundCounter(backgroundCounter + 1);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}

      {backgroundCounter > 0 && <h3 className="counter">Background has been changed {backgroundCounter} times.</h3>}
    </div>
  );
}

// add a new state variable to keep track of the number of 
// times the background color has been changed.

// Display the number of times the background color has been 
// changed on the page.

