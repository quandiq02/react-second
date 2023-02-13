import React from "react";
import "./toggle.css";
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterFirst: 0,
      counterSecond: 0,
    };
  }
  handleClickCounterFirst = () => {
    this.setState({counterFirst: this.state.counterFirst +1})
  };
  handleClickCounterSecond = () => {
    this.setState({counterSecond: this.state.counterSecond +1})
  };
  render() {
    return (
      <div className="toggle">
        <div className="toggle__wrapper">
          <div className="toggle-first">
            <div className="toggle__title">Hello world!</div>
            <div className="toggle__main">Lorem ipsum dolor sit.</div>
            <button className="toggle__btn" onClick={this.handleClickCounterFirst}>Click me</button>
            <div className="toggle__info-first">
              You've clicked {this.state.counterFirst} times
            </div>
          </div>
          <div className="toggle-second">
            <div className="toggle__title">Hello world!</div>
            <div className="toggle__main">Lorem ipsum dolor sit.</div>
            <button className="toggle__btn" onClick={this.handleClickCounterSecond}>Click me</button>
            <div className="toggle__info-second">
              You've clicked {this.state.counterSecond} times
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Toggle;
