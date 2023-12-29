import { useState } from "react";

export const FunctionalTrafficLight = () => {
  const [color1, setColor1] = useState("red");
  const [color2, setColor2] = useState("black");
  const [color3, setColor3] = useState("black");

  const nextColor = () => {
    if (color1 === "red") {
      setColor1("black");
      setColor2("yellow");
    } else if (color2 === "yellow") {
      setColor2("black");
      setColor3("green");
    } else if (color3 === "green") {
      setColor3("black");
      setColor1("red");
    }
  };
  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={`circle ${color1}`}></div>
        <div className={`circle ${color2}`}></div>
        <div className={`circle ${color3}`}></div>
      </div>
      <button className="next-state-button" onClick={nextColor}>
        Next State
      </button>
    </div>
  );
};
