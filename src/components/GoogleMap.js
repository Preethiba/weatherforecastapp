import React from 'react';

class GoogleMap extends React.Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return <div ref="map" style={{ height: '200px', width: '250px' }} />;
  }
}

export default GoogleMap;
