import {Component} from 'react';


const symbolPath = [
    [
        {lat: 21.0270001,lng: 105.8558944},
        {lat: 21.026110,lng: 105.855554},
      ],
      [
        {lat: 21.023674, lng: 105.854745},
        {lat: 21.024373, lng: 105.852331}, 
      ],
      [
        {lat: 21.025170,lng:  105.849690},
        {lat: 21.025872, lng: 105.849897},
      ],   
      [
        {lat: 21.026393,lng:  105.850061}, 
        {lat: 21.027937,lng:  105.844794},
      ],
      [
        {lat: 21.031373,  lng:  105.840466},
        {lat: 21.0317529,lng: 105.8400363},
      ],
      [
        {lat: 21.0335833,lng: 105.8390984},
        {lat: 21.0384339,lng: 105.8397971},
      ],
      [
        {lat: 21.042714,lng: 105.835987},
        {lat: 21.0430283,lng: 105.835951},
      ],
      [
        {lat: 21.043898, lng: 105.836297},
        {lat: 21.046787, lng: 105.836747},
      ],
      [
        {lat: 21.048176, lng: 105.838115},
        {lat: 21.048753, lng: 105.838594},
      ],
      [
        {lat: 21.050358, lng: 105.839769},
        {lat: 21.050091, lng: 105.840290},
      ],    
      //11
      [
        {lat: 21.048886, lng: 105.841909},
        {lat: 21.050243, lng: 105.840616},
      ],
      [
        {lat: 21.050080,lng: 105.839260},
        {lat: 21.048801, lng:105.838489},
      ],
      [
        {lat: 21.046925,lng:  105.836680},
        {lat: 21.044118,lng:  105.836246},
      ],
      [
        {lat: 21.042701,lng:  105.835786},
        {lat: 21.042686,lng:  105.835133},
      ],
      [
        {lat: 21.041831,lng:  105.835081},
        {lat: 21.041631,lng:  105.836226},
      ],
      [
        {lat: 21.039085,lng:  105.835680},
        {lat: 21.038853,lng:  105.837027},
      ],
      [
        {lat: 21.038853,lng:  105.837027},
        {lat: 21.035525,lng:  105.836379},
      ],
      [
        {lat: 21.034030,lng:  105.834588},
        {lat: 21.031023,lng:  105.834028},
      ],
      [
        {lat: 21.031023,lng:  105.834028},  
        {lat: 21.030392,lng:  105.835976}, 
      ],
      [
        {lat: 21.030119,lng:  105.836932},
        {lat: 21.028745,lng:  105.836447},
      ],
      //21
      [
        {lat: 21.027184,lng:  105.835758},
        {lat: 21.027706,lng:  105.834219},
      ],
      [
        {lat: 21.027706,lng:  105.834219},
        {lat: 21.028925,lng: 105.835025},
      ],
      [
        {lat: 21.030382,lng: 105.836086},
        {lat:21.029749,lng: 105.838437},
      ],
      [
        {lat:21.028828,lng: 105.841528},
        {lat:21.025949,lng: 105.841476},
      ],



      [
        {lat:21.023708,lng: 105.849166},
        {lat:21.024170,lng: 105.849324},

      ],

      [
        {lat: 21.027000,lng:  105.850236},
        {lat: 21.02843,lng:  105.849689},
      ],
      [
        {lat: 21.029217,lng:  105.850537},
        {lat: 21.028010,lng:  105.851103},
      ],
      [
        {lat: 21.025964,lng:  105.851671},
        {lat: 21.025731,lng:  105.851663},
      ],
      [
        {lat: 21.023099,lng:  105.851280},
        {lat: 21.022246,lng:  105.854253},
      ],
      [
        {lat: 21.021685,lng:  105.856168},
        {lat: 21.022442,lng:  105.856400},
      ],
      [
        {lat: 21.024627,lng: 105.856903},
        {lat: 21.026030,lng: 105.856418},
      ],
    ]
export class Directions extends Component{
    renderPolylines(){
        const google= window.google;
        const { markers, map, maps } = this.props
        const symbol = {
            path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
  
          }

        for (var i = 0; i < symbolPath.length; i++) {
            let directionPolyline = new maps.Polyline({
                path: symbolPath[i],
                geodesic: false,
                strokeColor: "#22519F",
                strokeOpacity: 0.95,
                strokeWeight: 3,
                icons: [{
                    icon: symbol,
                    offset: "5.5"
                  }],
                map: map
              })
        }

    }

    render () {
        this.renderPolylines()
        return null
      }
}

export default Directions;