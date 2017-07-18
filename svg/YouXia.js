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
            <Svg id="youxia" x="0" y="0" viewBox={"0 0 "+(this.props.s*254.9)+" "+(this.props.s*374.6)} width={this.props.s*parseInt(254.9*w)} height={this.props.s*parseInt(374.6*w)} version="1.1">
              <G scale={this.props.s}>
              <Path fill="#EBEBEB" d="M254.9,367.9H0.1c57.5,0,104.2-46.6,104.2-104.2V0l0,0l150.7,0V367.9z"/>
  <Path fill="#D4D4D4" d="M0.1,374.6c61.1,0,110.8-49.7,110.8-110.8V0L97.6,0v263.8c0,53.8-43.7,97.5-97.5,97.5V374.6z"/>
              </G>
            </Svg>
         );
   }
}

export default YouXia;