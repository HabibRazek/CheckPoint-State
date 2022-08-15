import { Component } from "react";
import React from "react";
import imageSRC from "./IMG_8449.jpg";
import "./App.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: null,
      timer: 0,
    };
  }

  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  Person = {
    fullName: "Habib Razek",
    bio: "Im software Engineer",
    imgSrc: imageSRC,
    profession: "Full stack",
  };

  render() {
    return (
      <div className="Container">
        <h3>FullName:{this.Person.fullName} </h3>
        <h3>bio:{this.Person.bio} </h3>
        <img src={this.Person.imgSrc} alt="" className="myprofileImage" />
        <h3>profession:{this.Person.profession} </h3>
        <h3>timer : {this.state.timer} </h3>
      </div>
    );
  }
}
export default Profile;
