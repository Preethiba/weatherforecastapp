import React, { Component } from 'react';
import { connect } from 'react-redux';
import Charts from '../components/Charts';

class WeatherList extends Component {
  renderWeather(cityData) {
    console.log(cityData);
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    return (
      <tr key={name}>
        <td>{name}</td>
        <Charts color="red" data={temps} />
        <Charts color="blue" data={humidity} />
        <Charts color="brown" data={pressure} />
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Pressure</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}

export default connect(mapStateToProps)(WeatherList);
