
const PersonCard = (props) => {

    // constructor(props) {
    //     super(props);
    //     this.state = {age: this.props.age};
    // }

    // increaseAge = () => {
    //     this.setState({age: this.state.age + 1});
    // }



        return(
            <div>
                <h1>{props.lastName}, {props.firstName}</h1>
                <p>{props.age}</p>
                <p>{props.hairColor}</p>
                {props.children}
                {/* <button onClick={ increaseAge }>Birthday Button for {props.firstName} {this.props.lastName}</button> */}
            </div>
        );

}

export default PersonCard;


