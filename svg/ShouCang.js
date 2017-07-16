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

class ShouCang extends Component {
   
   render() {
      return (
            <Svg t="1498700772317" class="icon" style="" viewBox={"0 0 "+(this.props.s*1024)+" "+(this.props.s*1024)} version="1.1" p-id="14103" width={this.props.s*parseInt(1024*w)} height={this.props.s*parseInt(1024*w)}>
            <G scale={this.props.s}>
            <Path d="M515.113921 2.946099 1024.023536 257.512958 515.113921 512.079818 6.205329 257.512958 515.113921 2.946099Z" fill="#1296db" p-id="14104"></Path>
            <Path d="M3.950985 296.408827 492.220514 545.619702 492.220514 1023.739057 3.950985 769.507842 3.950985 296.408827Z" fill="#f4ea2a" p-id="14105"></Path>
            <Path d="M1021.213537 296.408827 532.942985 545.619702 532.942985 1023.739057 1021.213537 769.507842 1021.213537 296.408827Z" fill="#d81e06" p-id="14106"></Path>
            </G>
            </Svg>
         );
   }
}

export default ShouCang;