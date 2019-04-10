import {Component} from 'react';

const stopBus = [
    ['1', 21.026463, 105.855659],
    ['2', 21.032294, 105.839528],
    ['3', 21.0335833, 105.8390984],
    ['4', 21.0430283, 105.835951],
    ['5', 21.0481377, 105.8379459],
    ['6', 21.033662, 105.836638],
    ['7', 21.030366, 105.836084],
    ['8', 21.024697, 105.845832],
    ['9', 21.028894, 105.849503],
    ['10', 21.023120, 105.851203],
    ['11', 21.024153, 105.857194]
  ];

export default class BusMarker extends Component {
    renderMarker(){
        const google=window.google;

        const busStop={
            url:"bb1.png",
            scaledSize: new google.maps.Size(30, 30)
          }
        const {map, maps} = this.props;

        {stopBus.map(stop=>(
            new maps.Marker({
                name: 'Your position',
                position: {lat: stop[1],lng: stop[2]},
                //label: stop[0],
                icon: busStop,
                map: map
            })
          ))}
    }

    render(){
        this.renderMarker();
        return null;
    }
}