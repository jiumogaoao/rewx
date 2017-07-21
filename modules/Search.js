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
            <View style={{backgroundColor:"#efeef4",height:parseInt(83*w),borderBottomWidth:1,borderBottomColor:'#dddce2'}}>
              <View style={{width:parseInt(689*w),height:parseInt(54*w),marginLeft:'auto',marginRight:'auto',marginTop:'auto',marginBottom:'auto'}}>
                <TextInput style={{flex:1,backgroundColor:'#fff',borderWidth:1,borderColor:'#e3e3e5',borderRadius:parseInt(5*w),textAlign:'center'}} underlineColorAndroid='transparent' placeholder={this.state.focus?null:'搜索'} onFocus={()=>{this.setState({focus:true})}} onBlur={()=>{this.setState({focus:false})}}/>
                <View style={{position:'absolute',top:parseInt(10*w),right:parseInt(10*w)}}><Icon name='yingping' style={{fontSize:parseInt(30*w),lineHeight:parseInt(30*w),color:'#c2c2c2'}}/></View>
                {this.state.focus?null:(<View style={{position:'absolute',top:parseInt(8*w),left:parseInt(280*w)}}><Icon name='sousuo' style={{fontSize:parseInt(30*w),lineHeight:parseInt(30*w),color:'#c2c2c2'}}/></View>)}
              </View>
            </View>
         );
   }
}

export default Search;