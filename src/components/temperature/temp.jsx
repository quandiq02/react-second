import React from "react";
import "./temp.css";
class Temp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      name: "Ice",
      iceBg: "#368BC1",
      waterBg: "#00FFFF",
      vaporBg: "#efecdf",
    };
  }

  handleClickMinus = () => {
    this.setState({ temp: this.state.temp - 1 });
  };
  handleClickMinusTen = () => {
    this.setState({ temp: this.state.temp - 10 });
  };
  handleClickPlus = () => {
    this.setState({ temp: this.state.temp + 1 });
  };
  handleClickPlusTen = () => {
    this.setState({ temp: this.state.temp + 10 });
  };
  sort() {
    setTimeout(() => {
      let tempName = document.querySelector(".temp__name"),
      temperature = document.querySelector(".temp__number"),
      tempBlock = document.querySelector(".temp__wrapper");
    if (this.state.temp <= 0) {
      tempName.textContent = "Ice";
      temperature.textContent = this.state.temp;
      tempBlock.style.background = this.state.iceBg;
    } else if (this.state.temp >= 1 && this.state.temp < 100) {
      tempName.textContent = "Water";
      temperature.textContent = this.state.temp;
      tempBlock.style.background = this.state.waterBg;
    } else {
      tempName.textContent = "Vapor";
      temperature.textContent = this.state.temp;
      tempBlock.style.background = this.state.vaporBg;
    }
    return(<> </>)
    }, 0)
  }
  render() {
    {this.sort()}
    return (
      <div className="temp">
        <div className="temp__wrapper">
          <div className="temp__main">
            <div className="temp__name">{this.state.name}</div>
            <div className="temp__number">{this.state.temp}</div>
          </div>
          <div className="temp__btns">
            <button className="temp__minus" onClick={this.handleClickMinus}>
              -
            </button>
            <button
              className="temp__minusten"
              onClick={this.handleClickMinusTen}
            >
              -10
            </button>
            <button className="temp__plus" onClick={this.handleClickPlus}>
              +
            </button>
            <button className="temp__plusten" onClick={this.handleClickPlusTen}>
              +10
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Temp;
