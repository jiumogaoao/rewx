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
            <Svg id="zuoshang" x="0" y="0" viewBox={"0 0 "+(this.props.s*254.9)+" "+(this.props.s*654.7)} width={this.props.s*parseInt(254.9*w)} height={this.props.s*parseInt(654.7*w)} version="1.1">
              <G scale={this.props.s}>
              <Path fill="#EBEBEB" d="M0.1,649.4h150.7c-0.1-0.1-133-108.6-133-133c0-24.4,133-115.3,133-115.3V110.8
    c0-57.5,46.6-104.2,104.2-104.2H0.1V649.4z"/>
  <Path fill="#D4D4D4" d="M146.7,654.6c-1.4-1-135.6-109.5-135.6-138.3c0-25.1,98.2-94.8,133-118.8V110.8C144.1,49.7,193.8,0,254.9,0
    v13.3c-53.8,0-97.5,43.7-97.5,97.5v293.9l-2.9,2C92,449.4,24.4,503.5,24.4,516.4c0,14.1,75.8,83.3,130.5,127.8l2.5,5.2L146.7,654.6
    z"/>
              </G>
            </Svg>
         );
   }
}

export default ZuoShang;