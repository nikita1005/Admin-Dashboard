import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      // mapCenter: {
      //   lat: 49.2827291,
      //   lng: -123.1207375
      // }
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map google={this.props.google}
            onClick={this.onMapClicked}
            // initialCenter={{
            //   lat: this.state.mapCenter.lat,
            //   lng: this.state.mapCenter.lng
            // }}
            >
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
          {/* <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow> */}
        </Map>
      )
    }
  }
  export default GoogleApiWrapper({
     apiKey:  ('AIzaSyAS3Em4fXlf46qapLyp6xHQlMQLipHGUsg')     //('AIzaSyBLVHqBpK4pTUHkxRLctTj6a3nHrt1d-uI')
  })(MapContainer)