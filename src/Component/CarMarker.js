import {Component} from 'react';
import callApi from '.././utils/apiCaller';

export class CarMarker extends Component{
    constructor (props) {
      super(props)

      this.state = {
        items: []
      }
      this.markers = [];
      this.loadData = this.loadData.bind(this);
      this.loadData();
    }
    componentDidMount(){
      setInterval(this.loadData, 30000);
    }

     loadData() {
      callApi('api/tracking?router_id=1&sr_key=VNS190613ADADASDASD1SGD2FGHFWEAW0ERW9AAAQ', 'GET', null).then(res =>{
        this.setState({
            items : res.data
        });
        console.log(res.data)
      });

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
        const { map, maps} = this.props;
        const { items } = this.state;
        const vehicles = items.vehicles;

        this.markers && (
          this.markers.map(function(marker) {
            marker.setMap(null);
          }))
        this.markers=[];

        if(vehicles){
           {vehicles.map((vehicle, index) => {
            const lat = parseFloat(vehicle.x);
            const lng = parseFloat(vehicle.y);
            let marker = new maps.Marker({
                key: vehicle.id_driver,
                name: 'Your position',
                position: {lat: lat,lng: lng},
                icon: this.getIcon(vehicle.orientation),
            })
            marker.setMap(map)
            this.markers.push(marker);
          })}
        }
    }

    render(){
        this.renderMarker();
        return null;
    }
}

export default CarMarker;