import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableOpacity,
   Image,
   TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons-iconfont/IconFont';
class Search extends Component {
   constructor(props) {
       super(props);
       this.state = { 
          focus:false
      };
     }
   render() {
      return (
            <View style={{backgroundColor:"#efeef4",height:parseInt(103*w),borderBottomWidth:1,borderBottomColor:'#dddce2'}}>
              <TextInput  style={{width:parseInt(689*w),height:parseInt(83*w),marginLeft:'auto',marginRight:'auto',marginTop:'auto',marginBottom:'auto',backgroundColor:'#fff',borderRadius:parseInt(10*w),textAlign:'center'}} underlineColorAndroid='transparent' placeholder={this.state.focus?null:'搜索'} onFocus={()=>{this.setState({focus:true})}} onBlur={()=>{this.setState({focus:false})}}/>

                
                <View style={{position:'absolute',top:parseInt(35*w),right:parseInt(30*w)}}><Icon name='yingping' style={{fontSize:parseInt(30*w),lineHeight:parseInt(30*w),color:'#c2c2c2'}}/></View>
                {this.state.focus?null:(<View style={{position:'absolute',top:parseInt(30*w),left:parseInt(280*w)}}><Icon name='sousuo' style={{fontSize:parseInt(30*w),lineHeight:parseInt(30*w),color:'#c2c2c2'}}/></View>)}

            </View>
         );
   }
}

export default Search;