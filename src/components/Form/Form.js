import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    render(){
        return(
            // When clicked on form button the inbuilt onSubmit method will fetch information from the weatherUrl which is avialable in the getWeather() function
            
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="City..."/>
                <input type="text" name="country" placeholder="Country..."/>
                <button>Get Weather</button>
            </form>
        );
    }
}

export default Form;