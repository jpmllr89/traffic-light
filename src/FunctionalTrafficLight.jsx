import { useState } from "react";

const lightSystem = [
  ["black", "black", "green"],
  ["black", "yellow", "black"],
  ["red", "black", "black"],
]

export const FunctionalTrafficLight = () => {
  const [light, setLight] = useState(0);


  
  // const nextColor = () => {
  //   if (color1 === "red") {
  //     setColor1("black");
  //     setColor2("yellow");
  //   } else if (color2 === "yellow") {
  //     setColor2("black");
  //     setColor3("green");
  //   } else if (color3 === "green") {
  //     setColor3("black");
  //     setColor1("red");
  //   }
  // };

  const handleLight = () => {
    if (light === lightSystem.length - 1){
      setLight(0);
    }else{
      setLight(light + 1);
    }
  }

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        {lightSystem[light].map((color, index) => (
          <div key={index} className={`circle ${color}`}></div>
        ))}
      </div>
      <button className="next-state-button" onClick={handleLight}>
        Next State
      </button>
    </div>
  );
};
