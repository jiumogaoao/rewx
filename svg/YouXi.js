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

class YouXi extends Component {
   
   render() {
      return (
            <Svg t="1498573142675" class="icon" style="" viewBox={"0 0 "+(this.props.s*1024)+" "+(this.props.s*1024)} version="1.1" width={this.props.s*parseInt(1024*w)} height={this.props.s*parseInt(1024*w)}>
              <G scale={this.props.s}>
                <Path d="M992.73,558.15H746.33a31.13,31.13,0,0,0-29.49,21.55A216.28,216.28,0,0,1,579.69,716.84a31.13,31.13,0,0,0-21.55,29.49v246.4c0,27.8,33.61,41.73,53.27,22.07L1014.8,611.42C1034.46,591.76,1020.53,558.15,992.73,558.15Z" transform="translate(0.1 0.1)" fill="#1afa29"/>
<Path d="M579.69,307.06A216.28,216.28,0,0,1,716.84,444.21a31.13,31.13,0,0,0,29.49,21.55h246.4c27.8,0,41.73-33.61,22.07-53.27L611.42,9.1c-19.66-19.66-53.27-5.74-53.27,22.07v246.4A31.13,31.13,0,0,0,579.69,307.06Z" transform="translate(0.1 0.1)" fill="#1296db"/>
<Path d="M444.21,716.84A216.29,216.29,0,0,1,307.06,579.69a31.13,31.13,0,0,0-29.49-21.55H31.17c-27.8,0-41.73,33.61-22.07,53.27l403.38,403.38c19.66,19.66,53.27,5.74,53.27-22.07V746.33a31.13,31.13,0,0,0-21.54-29.49Z" transform="translate(0.1 0.1)" fill="#e16531"/>
<Path d="M412.48,9.1,9.1,412.48c-19.66,19.66-5.74,53.27,22.07,53.27h246.4a31.13,31.13,0,0,0,29.49-21.55A216.28,216.28,0,0,1,444.21,307.05a31.13,31.13,0,0,0,21.55-29.49V31.17C465.75,3.37,432.14-10.56,412.48,9.1Z" transform="translate(0.1 0.1)" fill="#efb336"/>
              </G>
              
            </Svg>
         );
   }
}

export default YouXi;