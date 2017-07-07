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

class ZuoXia extends Component {
   
   render() {
      return (
            <Svg id="zuoxia" x="0" y="0" viewBox={"0 0 "+(this.props.s*parseInt(15*w))+" "+(this.props.s*parseInt(26*w))} width={this.props.s*parseInt(15*w)} height={this.props.s*parseInt(26*w)} version="1.1">
              <G scale={this.props.s}>
              <Path id="XMLID_3_" fill="#EBEBEB" d="M0,25.8V0h12l0.3,22c0,0.3,0,1.7,1,2.8c0.7,0.8,1.5,1.1,1.8,1.2C10.1,25.9,5.1,25.9,0,25.8z"/>
              <Path id="XMLID_2_" fill="none" stroke="#D8D8D8" stroke-miterlimit="10" d="M12,0l0.3,22c0,0.3,0,1.7,1,2.8c0.7,0.8,1.5,1.1,1.8,1.2"/>
              </G>
            </Svg>
         );
   }
}

export default ZuoXia;