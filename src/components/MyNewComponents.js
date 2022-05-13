import React, { Component } from 'react';

class MyNewComponent extends Component{
    render(){
        return(
            <div>
                <h1>We are in MyNewComponent</h1>
                {this.props.someText}
            </div>
        );
    }
}

export default MyNewComponent;


