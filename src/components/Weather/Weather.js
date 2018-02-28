import React, {Component} from 'react';
import './Weather.css';

class Weather extends Component {
    render() {
        return (
            <div className="weather__info">
            {/*if the city and country return true only then display the location paragraph once the the Get Weather button is clicked ( both the condition must be true)*/}
                {
                    this.props.city && this.props.country && <p>Location: 
                    <span>{this.props.city}, {this.props.country}</span>
                    </p>
                }
                
                {
                    this.props.temperature && <p>Temperature: 
                   <span> {this.props.temperature} </span>
                    </p>
                }
             
                {
                    this.props.humidity && <p>Humidity:
                    <span>{this.props.humidity}</span>
                    </p>
                }
                 
                {
                    this.props.description && <p>Conditions:
                    <span>{this.props.description}</span>
                    </p>
                }
                {
                    this.props.error && <p>
                    <span>{this.props.error}</span>
                    </p> 
                }
            </div>
        );
    }
}

export default Weather;