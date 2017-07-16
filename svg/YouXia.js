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
            <Svg id="youxia" x="0" y="0" viewBox={"0 0 "+(this.props.s*15)+" "+(this.props.s*26)} width={this.props.s*parseInt(15*w)} height={this.props.s*parseInt(26*w)} version="1.1">
              <G scale={this.props.s}>
              <Path fill="#EBEBEB" d="M0,26c0.3-0.1,1.1-0.6,1.8-1.4c1-1.1,2-2.5,2-2.8L5.1,0H15v26C9.9,26.1,5,25.9,0,26z"/>
<Path d="M0,25.8c0.3-0.1,1.1-0.4,1.8-1.2c1-1.1,2-2.5,2-2.8L5.1,0" fill="none" stroke="#D8D8D8" stroke-miterlimit="10"/>
              </G>
            </Svg>
         );
   }
}

export default YouXia;