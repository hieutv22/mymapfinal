import {Component} from 'react';

export default class Position extends Component{
    renderMarker(){
        const {lat, lng, map, maps} = this.props;
        let positon =   new maps.Marker({
                name: 'Your position',
                position: {lat: lat,lng: lng},
            })
            positon.setMap(map);
    }

    render(){
        this.renderMarker();
        return null;
    }
}