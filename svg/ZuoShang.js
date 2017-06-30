import React, { Component } from 'react';

import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

class ZuoShang extends Component {
   
   render() {
      return (
            <Svg id="zuoshang" x="0" y="0" viewBox={"0 0 "+(this.props.s*15)+" "+(this.props.s*48)} width={this.props.s*15} height={this.props.s*48} version="1.1">
              <G scale={this.props.s}>
              <Path id="XMLID_2_" fill="#EBEBEB" d="M0,0v48h10.9l-9-10.3l8.7-9.3V5c0.1-0.6,0.3-1.7,1.1-2.8c0.9-1.4,2.1-2,2.6-2.2C9.4,0,4.7,0,0,0z"/>
              <Path id="XMLID_1_" fill="none" stroke="#D8D8D8" stroke-miterlimit="10" d="M11.3,48l-10-10.3l9.7-9.3V5c0.1-0.6,0.3-1.7,1.2-2.8c1-1.4,2.3-2,2.8-2.2"/>
              </G>
            </Svg>
         );
   }
}

export default ZuoShang;