import {Component} from 'react';

export class GetLocation extends Component{
	constructor(props){
    super(props);
		this.state = {
			latitude: '',
          	longitude: ''
		}
    this.markerLocation = null;
		this.getMyLocation = this.getMyLocation.bind(this);
    this.getMyLocation();
	}
	componentDidUpdate(){
    this.getMyLocation();
  }
  	getMyLocation() {
    const location = window.navigator && window.navigator.geolocation
    
    if (location) {
      location.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      }, (error) => {
        this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
      })
    }

  	}
  renderMarkerLocation(){
    const {map, maps} = this.props;
    const {latitude, longitude} = this.state;
    this.markerLocation && this.markerLocation.setMap(null);
    this.markerLocation =   new maps.Marker({
          name: 'Your position',
          position: {lat: latitude,lng: longitude},
          map: map
    })
  }
  	render(){
      this.renderMarkerLocation();
  		
  		return null;
  	}



}
export default GetLocation;