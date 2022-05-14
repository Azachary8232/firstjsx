import React, { Component } from 'react';

class PersonCard extends Component{

    constructor(props) {
        super(props);
        this.state = {age: this.props.age};
    }

    increaseAge = () => {
        this.setState({age: this.state.age + 1});
    }


    render(){
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>{this.state.age}</p>
                <p>{this.props.hairColor}</p>
                {this.props.children}
                <button onClick={ this.increaseAge }>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        );
    }
}

export default PersonCard;


