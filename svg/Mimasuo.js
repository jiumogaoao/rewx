import React, { Component } from 'react';
import {
   TouchableHighlight
} from 'react-native';
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

class Mimasuo extends Component {
   
   render() {
      return (
            <Svg version="1.1" id="edrf" x="0" y="0" viewBox={"0 0 "+(1024*this.props.s)+" "+(1024*this.props.s)} width={parseInt(1024*w)*this.props.s} height={parseInt(1024*w)*this.props.s}>
            <G scale={this.props.s}>
    <Path fill="#7CB394" d="M118.3,5C54.2,5,2.2,57,2.2,121s52,116,116,116s116-52,116-116S182.4,5,118.3,5z M118.3,233
        C56.4,233,6.3,182.9,6.3,121S56.4,9.1,118.3,9.1S230.2,59.2,230.2,121S180.1,233,118.3,233z"/>
    {this.props.data.a1?(<Path id="zuoshang" fill="#7CB394" d="M118.3,95.4c-14.2,0-25.7,11.5-25.7,25.7s11.5,25.7,25.7,25.7s25.7-11.5,25.7-25.7S132.4,95.4,118.3,95.4z"
        />):null}    
    <Path fill="#7CB394" d="M509.5,5c-64.1,0-116,52-116,116s52,116,116,116s116-52,116-116S573.6,5,509.5,5z M509.5,233
        c-61.8,0-111.9-50.1-111.9-111.9S447.7,9.1,509.5,9.1S621.5,59.2,621.5,121S571.4,233,509.5,233z"/>
    {this.props.data.a2?(<Path id="zhongshang" fill="#7CB394" d="M509.5,95.4c-14.2,0-25.7,11.5-25.7,25.7s11.5,25.7,25.7,25.7c14.2,0,25.7-11.5,25.7-25.7
        S523.7,95.4,509.5,95.4z"/>):null} 
    <Path fill="#7CB394" d="M907,5c-64.1,0-116,52-116,116s52,116,116,116s116-52,116-116S971,5,907,5z M907,233
        C845.1,233,795,182.9,795,121S845.1,9.1,907,9.1s111.9,50.1,111.9,111.9S968.8,233,907,233z"/>
    {this.props.data.a3?(<Path id="youshang" fill="#7CB394" d="M907,95.4c-14.2,0-25.7,11.5-25.7,25.7s11.5,25.7,25.7,25.7s25.7-11.5,25.7-25.7S921.1,95.4,907,95.4z"/>):null}
    <Path fill="#7CB394" d="M118.3,402.4c-64.1,0-116,52-116,116s52,116,116,116s116-52,116-116S182.4,402.4,118.3,402.4z M118.3,630.4
        c-61.8,0-111.9-50.1-111.9-111.9s50.1-111.9,111.9-111.9s111.9,50.1,111.9,111.9S180.1,630.4,118.3,630.4z"/>
    {this.props.data.a4?(<Path id="zuozhong" fill="#7CB394" d="M118.3,492.8c-14.2,0-25.7,11.5-25.7,25.7s11.5,25.7,25.7,25.7s25.7-11.5,25.7-25.7
        S132.4,492.8,118.3,492.8z"/>):null}
    <Path fill="#7CB394" d="M509.5,402.4c-64.1,0-116,52-116,116s52,116,116,116s116-52,116-116S573.6,402.4,509.5,402.4z M509.5,630.4
        c-61.8,0-111.9-50.1-111.9-111.9s50.1-111.9,111.9-111.9s111.9,50.1,111.9,111.9S571.4,630.4,509.5,630.4z"/>
    {this.props.data.a5?(<Path id="zhongzhong" fill="#7CB394" d="M509.5,492.8c-14.2,0-25.7,11.5-25.7,25.7s11.5,25.7,25.7,25.7c14.2,0,25.7-11.5,25.7-25.7
        S523.7,492.8,509.5,492.8z"/>):null}
    <Path fill="#7CB394" d="M907,402.4c-64.1,0-116,52-116,116s52,116,116,116s116-52,116-116S971,402.4,907,402.4z M907,630.4
        c-61.8,0-111.9-50.1-111.9-111.9S845.1,406.5,907,406.5s111.9,50.1,111.9,111.9S968.8,630.4,907,630.4z"/>
    {this.props.data.a6?(<Path id="youzhong" fill="#7CB394" d="M907,492.8c-14.2,0-25.7,11.5-25.7,25.7s11.5,25.7,25.7,25.7s25.7-11.5,25.7-25.7S921.1,492.8,907,492.8z"
        />):null}
    <Path fill="#7CB394" d="M118.3,790.6c-64.1,0-116,52-116,116s52,116,116,116s116-52,116-116S182.4,790.6,118.3,790.6z
         M118.3,1018.6c-61.8,0-111.9-50.1-111.9-111.9s50.1-111.9,111.9-111.9s111.9,50.1,111.9,111.9S180.1,1018.6,118.3,1018.6z"/>
    {this.props.data.a7?(<Path id="zuoxia" fill="#7CB394" d="M118.3,881c-14.2,0-25.7,11.5-25.7,25.7c0,14.2,11.5,25.7,25.7,25.7s25.7-11.5,25.7-25.7
        C143.9,892.5,132.4,881,118.3,881z"/>):null}     
    <Path fill="#7CB394" d="M509.5,790.6c-64.1,0-116,52-116,116s52,116,116,116s116-52,116-116S573.6,790.6,509.5,790.6z
         M509.5,1018.6c-61.8,0-111.9-50.1-111.9-111.9s50.1-111.9,111.9-111.9s111.9,50.1,111.9,111.9S571.4,1018.6,509.5,1018.6z"/>
    {this.props.data.a8?(<Path id="zhongxia" fill="#7CB394" d="M509.5,881c-14.2,0-25.7,11.5-25.7,25.7c0,14.2,11.5,25.7,25.7,25.7c14.2,0,25.7-11.5,25.7-25.7
        C535.2,892.5,523.7,881,509.5,881z"/>):null}
    <Path fill="#7CB394" d="M907,790.6c-64.1,0-116,52-116,116s52,116,116,116s116-52,116-116S971,790.6,907,790.6z M907,1018.6
        c-61.8,0-111.9-50.1-111.9-111.9S845.1,794.7,907,794.7s111.9,50.1,111.9,111.9S968.8,1018.6,907,1018.6z"/>
    {this.props.data.a9?(<Path id="youxia" fill="#7CB394" d="M907,881c-14.2,0-25.7,11.5-25.7,25.7c0,14.2,11.5,25.7,25.7,25.7s25.7-11.5,25.7-25.7
        C932.6,892.5,921.1,881,907,881z"/>):null}
    {this.props.data.a3a5?(<Polygon id="35" fill="#7CB394" points="508.1,516 505.3,513.1 708,313.5 905.8,118.8 908.6,121.7 709.3,317.8     "/>):null}
    {this.props.data.a5a7?(<Polygon id="57" fill="#7CB394" points="116.8,907.2 114,904.4 372.2,646.2 505.2,513.2 508.1,516 376.5,647.5     "/>):null}
    {this.props.data.a1a5?(<Polygon id="15" fill="#7CB394" points="505.2,516 359.7,369.3 114,121.6 116.8,118.8 364.3,368.2 508.1,513.2     "/>):null}
    {this.props.data.a5a9?(<Polygon id="59" fill="#7CB394" points="905.8,907.3 636.1,643.9 505.3,516 508.1,513.1 638,640 908.6,904.4   "/>):null}
    {this.props.data.a3a6?(<Rect id="36" x="905.2" y="120.2" fill="#7CB394" width="4" height="394.3"/>):null}
    {this.props.data.a6a9?(<Rect id="69" x="905.2" y="514.6" fill="#7CB394" width="4" height="391.3"/>):null}
    {this.props.data.a8a9?(<Rect id="89" x="506.7" y="903.8" fill="#7CB394" width="400.5" height="4"/>):null}
    {this.props.data.a7a8?(<Rect id="78" x="115.4" y="903.8" fill="#7CB394" width="391.3" height="4"/>):null}
    {this.props.data.a4a7?(<Rect id="47" x="113.4" y="514.6" fill="#7CB394" width="4" height="391.3"/>):null}
    {this.props.data.a1a4?(<Rect id="14" x="113.4" y="120.2" fill="#7CB394" width="4" height="394.3"/>):null}
    {this.props.data.a1a2?(<Rect id="12" x="115.4" y="118.2" fill="#7CB394" width="391.3" height="4"/>):null}
    {this.props.data.a2a3?(<Rect id="23" x="506.7" y="118.2" fill="#7CB394" width="400.5" height="4"/>):null}
    {this.props.data.a2a5?(<Rect id="_x32_5" x="506.7" y="120.2" fill="#7CB394" width="4" height="394.3"/>):null}
    {this.props.data.a5a8?(<Rect id="_x35_8" x="506.7" y="514.6" fill="#7CB394" width="4" height="391.3"/>):null}
    {this.props.data.a5a6?(<Rect id="_x35_6" x="506.7" y="517.6" fill="#7CB394" width="400.5" height="4"/>):null}
    {this.props.data.a4a5?(<Rect id="_x34_5" x="115.4" y="517.6" fill="#7CB394" width="391.3" height="4"/>):null}
    {this.props.data.a2a4?(<Polygon id="_x32_4" fill="#7CB394" points="116.8,523 114,520.2 296.7,332.7 505.3,118.8 508.1,121.6 304.5,330.5     "/>):null}
    {this.props.data.a4a8?(<Polygon id="_x34_8" fill="#7CB394" points="509.3,907.3 329.1,730.3 114,519 116.8,516.2 333.2,728.8 512.1,904.5     "/>):null}
    {this.props.data.a6a8?(<Polygon id="_x36_8" fill="#7CB394" points="512.1,907.3 509.3,904.5 781.4,638 905.8,516.2 908.6,519 784.2,640.9     "/>):null}
    {this.props.data.a2a6?(<Polygon id="_x32_6" fill="#7CB394" points="903.8,516 692.5,304.8 509.3,121.6 512.1,118.8 689,295.6 906.6,513.2     "/>):null}
</G>
</Svg>
         );
   }
}

export default Mimasuo;