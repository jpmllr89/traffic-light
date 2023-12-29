import { Component } from "react";

export class ClassTrafficLight extends Component {
  state = {
    color1: "red",
    color2: "black",
    color3: "black",
  };

  nextColor = () => {
    const { color1, color2, color3 } = this.state;
    if (color1 === "red") {
      this.setState({ color1: "black", color2: "yellow" });
    } else if (color2 === "yellow") {
      this.setState({ color2: "black", color3: "green" });
    } else if (color3 === "green") {
      this.setState({ color3: "black", color1: "red" });
    }
  };

  render() {
    const { color1, color2, color3 } = this.state;
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className={`circle ${color1}`}></div>
          <div className={`circle ${color2}`}></div>
          <div className={`circle ${color3}`}></div>
        </div>
        <button className="next-state-button" onClick={this.nextColor}>
          Next State
        </button>
      </div>
    );
  }
}
