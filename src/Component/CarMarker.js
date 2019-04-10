import {Component} from 'react';

export class CarMarker extends Component{
  shouldComponentUpdate(nextProps){
    return this.props.items !== nextProps.items;
  }
    getIcon(orientation){
        const google=window.google;
        var iconCar = null;
        if ((orientation>=345 && orientation<359) || (orientation>=0 && orientation<15)){
          iconCar = {
            url: "car0.png",
            scaledSize: new google.maps.Size(20, 40)
          };
        }else if (orientation>=15 && orientation<45) {
          iconCar = {
            url: "car30.png",
            scaledSize: new google.maps.Size(40, 40)
          };
        }else if (orientation>=45 && orientation<75) {
          iconCar = {
            url: "car60.png",
            scaledSize: new google.maps.Size(40, 40)
          };
        }else if (orientation>=75 && orientation<105) {
          iconCar = {
            url: "car90.png",
            scaledSize: new google.maps.Size(40, 40)
          };
        }else if (orientation>=105 && orientation<135) {
          iconCar = {
            url: "car120.png",
            scaledSize: new google.maps.Size(40, 40)
          };
        }else if (orientation>=135 && orientation<165) {
          iconCar = {
            url: "car150.png",
            scaledSize: new google.maps.Size(40, 40)
          };
        }else if (orientation>=165 && orientation<195) {
          iconCar = {
            url: "car180.png",
            scaledSize: new google.maps.Size(40, 40)
          };
        }else if (orientation>=195 && orientation<225) {
          iconCar = {
            url: "car210.png",
            scaledSize: new google.maps.Size(40, 40)
          };
        }else if (orientation>=225 && orientation<255) {
          iconCar = {
            url: "car240.png",
            scaledSize: new google.maps.Size(40, 40)
          };
        }else if (orientation>=255 && orientation<285) {
          iconCar = {
            url: "car270.png",
            scaledSize: new google.maps.Size(40, 40)
          };
        }else if (orientation>=285 && orientation<315) {
          iconCar = {
            url: "car300.png",
            scaledSize: new google.maps.Size(40, 40)
          };
        }else {
          iconCar = {
            url: "car330.png",
            scaledSize: new google.maps.Size(40, 40)
          };
        }
        return iconCar;
    }
    renderMarker(){
        const {items, map, maps} = this.props;

        {items.map(item => (
            new maps.Marker({
                key: item.id_driver,
                name: 'Your position',
                position: {lat: item.lat,lng: item.lng},
                icon: this.getIcon(item.orientation),
                map : map
            })
            
        ))}
    }

    render(){
        this.renderMarker();
        return null;
    }
}

export default CarMarker;