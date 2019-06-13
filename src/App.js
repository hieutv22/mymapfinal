import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Polyline  from './Component/Polyline';
import Directions from './Component/Directions';
import callApi from './utils/apiCaller';
import CarMarker from './Component/CarMarker';
import BusMarker from './Component/BusMarker';
import Position from  './Component/Position';
import GetLocation from './Component/GetLocation'


class Map extends Component {
  constructor (props) {
    super(props)

    this.state = {
      mapsLoaded: false,
      map: null,
      maps: null,
      items: [],
    }
    //this.getMyLocation = this.getMyLocation.bind(this)
    //this.loadData = this.loadData.bind(this);
  }
  componentDidMount(){
    //this.loadData();
    //setInterval(this.loadData, 30000);
  }

  componentDidUpdate(){
    //this.getMyLocation();
  }

  

  onMapLoaded (map, maps) {
    this.fitBounds(map, maps)

    this.setState({
      //...this.state,
      mapsLoaded: true,
      map: map,
      maps: maps
    })
  }

  fitBounds (map, maps) {
    var bounds = new maps.LatLngBounds()
    for (let marker of this.props.markers) {
      bounds.extend(
        new maps.LatLng(marker.lat, marker.lng)
      )
    }
    map.fitBounds(bounds)
  }

  afterMapLoadChanges () {
    return (
      <div style={{display: 'none'}}>
        <Polyline
          map={this.state.map}
          maps={this.state.maps}
          markers={this.props.markers} />

        <Directions
          map={this.state.map}
          maps={this.state.maps}
          markers={this.props.markers}
        />

        
        <BusMarker 
          map ={this.state.map}
          maps = {this.state.maps}
        />
        {this.showLocation()}
      </div>
    )
  }
  showLocation(){
      return  <GetLocation
        map ={this.state.map}
        maps = {this.state.maps}
      />
  }
  render () {
    return (
      <>
      <GoogleMap
        bootstrapURLKeys={{key: 'AIzaSyDc2L7RMA_qzBVxIMKD1z6-FfMdOs32Vmc',
                          libraries: ['places', 'drawing']}}
        style={{height: '100%', width: '100%'}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({map, maps}) => this.onMapLoaded(map, maps)}>
        
        {this.state.mapsLoaded ? this.afterMapLoadChanges() : ''}
        
      </GoogleMap>
      {this.state.mapsLoaded && (<CarMarker
            map={this.state.map}
            maps={this.state.maps}
        />)}
      </>
    )
  }
}

Map.defaultProps = {
  markers: [
    {lat: 21.026463, lng: 105.855659},
    {lat: 21.026463, lng: 105.855659},
    {lat: 21.032294, lng: 105.839528},
    {lat: 21.0335833, lng: 105.8390984},
    {lat: 21.0430283, lng: 105.835951},
    {lat: 21.0481377, lng: 105.835951},
    {lat: 21.033662, lng: 105.836638},
    {lat: 21.030366, lng: 105.836084},
    {lat: 21.024697, lng: 105.845832},
    {lat: 21.028894, lng: 105.849503},
    {lat: 21.023120, lng: 105.851203},
    {lat: 21.024153, lng: 105.857194}     
  ],
  center: [47.367347, 8.5500025],
  zoom: 14
}
export default Map