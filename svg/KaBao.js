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

class KaBao extends Component {
   
   render() {
      return (
            <Svg t="1498714245102" class="icon" style="" p-id="704" viewBox={"0 0 "+(this.props.s*parseInt(1024*w))+" "+(this.props.s*parseInt(1024*w))} version="1.1" width={this.props.w} height={this.props.h}>
            <G scale={this.props.s}>
<Path d="M952.32 926.208l-880.64-76.8v-537.6l880.64 76.8z" fill="#2F71F4" p-id="705"></Path>
            <Path d="M952.32 137.728l-880.64 122.88 880.64 81.92v-204.8z" fill="#24D141" p-id="706"></Path>
            </G>
            
            </Svg>
         );
   }
}

export default KaBao;