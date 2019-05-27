import React, {Component} from 'react';

export default class Position extends Component{
    constructor(props){
        super(props)
        this.markerPosition = null;
    }
    renderMarker(){

        const {lat, lng, map, maps} = this.props;
        let position =   new maps.Marker({
                name: 'Your position',
                position: {lat: lat,lng: lng},
            })
        position.setMap(map);
    }

    render(){
        //this.renderMarker();
        
        const {lat, lng, map, maps} = this.props;
        this.markerPosition &&  this.markerPosition.setMap(null);

        this.markerPosition =   new maps.Marker({
                name: 'Your position',
                position: {lat: lat,lng: lng},
            })
        this.markerPosition.setMap(map);
        return null;
    }
}