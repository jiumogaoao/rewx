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
            <Svg id="youshang" x="0" y="0" viewBox={"0 0 "+(this.props.s*254.9)+" "+(this.props.s*654.7)} width={this.props.s*parseInt(254.9*w)} height={this.props.s*parseInt(654.7*w)} version="1.1">
              <G scale={this.props.s}>
              <Path fill="#EBEBEB" d="M254.9,649.4H104.2c0.1-0.1,133-108.6,133-133c0-24.4-133-115.3-133-115.3V110.8
    C104.2,53.2,57.6,6.6,0.1,6.6h254.9V649.4z"/>
  <Path fill="#D4D4D4" d="M108.3,654.6c1.4-1,135.6-109.5,135.6-138.3c0-25.1-98.2-94.8-133-118.8V110.8C110.9,49.7,61.2,0,0.1,0
    l0,13.3c53.8,0,97.5,43.7,97.5,97.5v293.9l2.9,2c62.6,42.8,130.1,96.9,130.1,109.8c0,14.1-75.8,83.3-130.5,127.8l-2.5,5.2
    L108.3,654.6z"/>
              </G>
            </Svg>
         );
   }
}

export default YouShang;