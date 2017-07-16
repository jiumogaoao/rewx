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

class YouShang extends Component {
   
   render() {
      return (
            <Svg id="youshang" x="0" y="0" viewBox={"0 0 "+(this.props.s*15)+" "+(this.props.s*48)} width={this.props.s*parseInt(15*w)} height={this.props.s*parseInt(48*w)} version="1.1">
              <G scale={this.props.s}>
              <Path id="XMLID_2_" fill="#EBEBEB" d="M0,0c0,0,2.4,0.8,3.3,2.2c0.8,1.1,1,2.2,1.1,2.8v23.4l8.7,9.3L4.1,48l-0.3,2.7L15,50.5V48V0
    v-2.7L0-2.7L0,0z"/>
  <Path id="XMLID_1_" fill="none" stroke="#D8D8D8" stroke-miterlimit="10" d="M0,0c0.5,0.2,1.8,0.8,2.8,2.2C3.7,3.3,3.9,4.4,4,5
    v23.4l9.7,9.3L3.7,48"/>
              </G>
            </Svg>
         );
   }
}

export default YouShang;