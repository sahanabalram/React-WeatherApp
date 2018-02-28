import React, {Component} from 'react';
import './Weather.css';

class Weather extends Component {
    render() {
        return (
            <div>
            {/*if the city and country return true only then display the location paragraph once the the Get Weather button is clicked ( both the condition must be true)*/}
                {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
                {/*if the temperature  return true only then display the temperature paragraph once the Get Weather button is clicked (the condition must be true)*/}
                {this.props.temperature && <p>Temperature: {this.props.temperature} </p>}
                 {/*if the humidity return true only then display the humidity once the Get Weather button is clicked (the condition must be true)*/}
                {this.props.humidity && <p>Humidity:{this.props.humidity}</p>}
                 {/*if the conditions return true only then display the conditions once the Get Weather button is clicked (the condition must be true)*/}
                {this.props.description && <p>Conditions:{this.props.description}</p>}
                {this.props.error && <p>{this.props.error}</p>}
            </div>
        );
    }
}

export default Weather;