import React from "react";
import "./modal.css";
const quotes = [
  {
    author: "Саша",
    quote: "Музыка - это душа языка.",
    color: "#00b3ff",
  },
  {
    author: "Дарья",
    quote: "Никогда не переставай мечтать",
    color: "#45ff20",
  },
  {
    author: "Миша",
    quote: "Не сдавайся, начать всегда тяжело",
    color: "#d736da",
  },
];
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
    if (this.state.count === quotes.length - 1) {
      this.setState({ count: 0 });
    } else {
      this.setState({ count: this.state.count + 1 });
    }
  };
  render() {
    return (
      <div
        className="modal"
        style={{ backgroundColor: quotes[this.state.count].color }}
      >
        <div
          className="modal__wrapper"
          style={{ color: quotes[this.state.count].color }}
        >
          <div className="modal__quote">{quotes[this.state.count].quote}</div>
          <div className="modal__author">{quotes[this.state.count].author}</div>
          <div
            className="modal__btn"
            style={{ backgroundColor: quotes[this.state.count].color }}
            onClick={this.handleClick}
          >
            New Quote
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
