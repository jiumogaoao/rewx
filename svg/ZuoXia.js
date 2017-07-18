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
            <Svg id="zuoxia" x="0" y="0" viewBox={"0 0 "+(this.props.s*254.9)+" "+(this.props.s*374.6)} width={this.props.s*parseInt(254.9*w)} height={this.props.s*parseInt(374.6*w)} version="1.1">
              <G scale={this.props.s}>
              <Path fill="#EBEBEB" d="M0.1,367.9h254.9c-57.5,0-104.2-46.6-104.2-104.2V0l0,0H0.1V367.9z"/>
  <Path fill="#D4D4D4" d="M254.9,374.6c-61.1,0-110.8-49.7-110.8-110.8V0h13.3v263.8c0,53.8,43.7,97.5,97.5,97.5V374.6z"/>
              </G>
            </Svg>
         );
   }
}

export default ZuoXia;