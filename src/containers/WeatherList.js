import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparkline';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.city.list.map(weather => weather.main.temp);
    const humidity = cityData.city.list.map(weather => weather.main.humidity);
    const pressure = cityData.city.list.map(weather => weather.main.pressure);
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Sparklines data={temps} height={120} width={180}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
        <td>
          <Sparklines data={humidity} height={120} width={180}>
            <SparklinesLine color="blue" />
          </Sparklines>
        </td>
        <td>
          <Sparklines data={pressure} height={120} width={180}>
            <SparklinesLine color="green" />
          </Sparklines>
        </td>
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
            <th>Pressure</th>
            <th>Humidity</th>
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
