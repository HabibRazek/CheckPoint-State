import { Component } from 'react';
import React from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interval: null,
            timer :0,
        };
    }

    componentDidMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({timer :this.state.timer + 1});
        }, 1000),
        });
    };

    componentWillUnmount() {
        clearInterval(this.state.interval);
    };

    Person = {
        fullName:"Habiv Razek",
        bio:"Im software Engineer",
        imgSrc:"http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
        profession:"Full stack",
    };

    render() {
        return (
            <div>
                <h3>FullName:{this.person.fullName} </h3>
                <h3>bio:{this.person.bio} </h3>
                <h3>imgSrc:{this.person.imgSrc} </h3>
                <h3>profession:{this.person.profession} </h3>
            </div>
        );
    };
};
export default Profile;

