import React, { Component } from "react";
import "./App.css";
import Profile from "./Profile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }

  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };
  render() {
    return (
      <div className="App">
        <h1>Workshop State</h1>
        <div>
          <button onClick={this.toggleVisibility}>
            {this.state.isVisible ? "Hide Profile" : "Show Profile"}
          </button>
        </div>
        {this.state.isVisible && <Profile />}
      </div>
    );
  }
}

export default App;
