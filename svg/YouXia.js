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

class YouXia extends Component {
   
   render() {
      return (
            <Svg id="youxia" x="0" y="0" viewBox={"0 0 "+(this.props.s*parseInt(15*w))+" "+(this.props.s*parseInt(26*w))} width={this.props.s*parseInt(15*w)} height={this.props.s*parseInt(26*w)} version="1.1">
              <G scale={this.props.s}>
              <Path id="XMLID_3_" fill="#EBEBEB" d="M0,26c0.3-0.1,1.1-0.4,1.8-1.2c1-1.1,1-2.5,1-2.8L3.1,0l12,0v25.8C10,25.9,5,25.9,0,26z"/>
              <Path id="XMLID_2_" fill="none" stroke="#D8D8D8" stroke-miterlimit="10" d="M0,26c0.3-0.1,1.1-0.4,1.8-1.2c1-1.1,1-2.5,1-2.8L3.1,0"/>
              </G>
            </Svg>
         );
   }
}

export default YouXia;