import React from "react";
import "./darkMode.css";
class DarkMode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: true,
    };
  }
  handleClick = () => {
    let darkModeArea = document.querySelector('.darkmode__wrapper');
    if (this.state.isDark == false) {
        this.setState({isDark:true});
        darkModeArea.style.backgroundColor='#fff'
        darkModeArea.style.color='#14172d'
        darkModeArea.style.transition = "all 600ms";
    }else{
        this.setState({isDark:false});
        darkModeArea.style.backgroundColor='#14172d'
        darkModeArea.style.color='#fff'
        darkModeArea.style.transition = "all 600ms";

    }
  };
  render() {
    return (
      <div className="darkmode">
        <div className="darkmode__wrapper">
          <div className="darkmode__title">Lorem, ipsum dolor.</div>
          <div className="darkmode__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sequi
            blanditiis necessitatibus voluptatibus ullam, vero ratione illum
            quasi delectus illo.
          </div>
          <div className="darkmode__input">
            <input
              type="checkbox"
              className="darkmode__input-area"
              id="darkmode__input-area"
              onClick={this.handleClick}
            />
            <label htmlFor="darkmode__input-area">Dark mode</label>
          </div>
        </div>
      </div>
    );
  }
}

export default DarkMode;
