import {Component} from 'react';

const stopBus = [
    ['1', 21.026497,105.856294],
    ['2', 21.031889,105.839981],
    ['3', 21.037053,105.839622],
    ['4', 21.044303,105.836403],
    ['5', 21.047887,105.837599],
    ['6', 21.031550,105.834128],
    ['7', 21.027586,105.834742],
    ['8', 21.024756,105.845719],
    ['9', 21.028119,105.851122],
    ['10', 21.023067,105.851328],
    ['11', 21.024128,105.857228]
  ];

export default class BusMarker extends Component {
    renderMarker(){
        const google=window.google;

        const busStop={
            url:"bb1.png",
            scaledSize: new google.maps.Size(30, 30)
          }
        const {map, maps} = this.props;
        this.infowindow = new maps.InfoWindow();    
        {stopBus.map((stop, index)=>{
            let marker = new maps.Marker({
                name: 'Your position',
                position: {lat: stop[1],lng: stop[2]},
                icon: busStop,
                map: map
            })

            marker.addListener('click', ()=>{
                switch(index){
                    case 0: this.infowindow.setContent('Vườn hoa Con Cóc - Frog Garden');
                            break;
                    case 1: this.infowindow.setContent('Bảo tàng quân đội - Military History Museum');
                            break;
                    case 2: this.infowindow.setContent('Hoàng thành Thăng Long - Imperial Citadel of Thang Long');
                            break;
                    case 3: this.infowindow.setContent('Đền Quán Thánh - Quan Thanh Temple');
                            break;
                    case 4: this.infowindow.setContent('Chùa Trấn Quốc - Tran Quoc Pagoda');
                            break;
                    case 5: this.infowindow.setContent('Lăng Chủ Tịch Hồ Chí Minh - Ho Chi Minh Mausoleum');
                            break;
                    case 6: this.infowindow.setContent('Văn Miếu Quốc Tử Giám - Temple of Literature');
                            break;
                    case 7: this.infowindow.setContent('Nhà tù Hỏa Lò - Hoa Lo Prison');
                            break;
                    case 8: this.infowindow.setContent('Nhà thờ Lớn - Ha Noi Cathedral');
                            break;
                    case 9: this.infowindow.setContent('Bảo tàng Phụ Nữ Việt Nam - Vietnam womens museum');
                            break;
                    case 10: this.infowindow.setContent('Nhà hát Lớn - Ha Noi Opera House');
                            break; 
                    default:
                            break;

                }
                this.infowindow.open(map, marker);
            })
          })}
    }

    render(){
        this.renderMarker();
        return null;
    }
}