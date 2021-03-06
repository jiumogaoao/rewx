import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons-iconfont/IconFont';

class Nav extends Component {
   constructor(props) {
       super(props);
       this.state = { page: 0 };
       this.styles = StyleSheet.create({
  navFrame: {
   flex:1,
   flexDirection : 'column',
   justifyContent : 'space-around'
  },
  icon:{
   lineHeight:parseInt(48*w),
   textAlign:'center',
   fontSize:parseInt(48*w),
   height:parseInt(54*w)
  },
  text:{
   textAlign:'center',
   fontSize:parseInt(18*w)
  }
});
     }
   render() {
      return (
            <View style={{height : parseInt(96*w),flexDirection:'row',justifyContent : 'space-between',backgroundColor:'#f8f8f8',borderTopWidth:1,borderTopColor:'#b7b7b7'}}>
               <TouchableOpacity onPressIn={() => {this.props.go(0);}} style={{flex :1,flexDirection : 'column'}}>
                  <View style={this.styles.navFrame}>
                     <Icon name={this.props.state==0?"qipao":"qipao2"} style={[this.styles.icon,{color:this.props.state==0?"#1aac19":"#727274"}]}/>
                     <Text style={[this.styles.text,{color:this.props.state==0?"#1aac19":"#727274"}]}>微信</Text>
                  </View>
               </TouchableOpacity>
               <TouchableOpacity onPressIn={() => {this.props.go(1);}} style={{flex :1}}>
                  <View style={this.styles.navFrame}>
                     <Icon name={this.props.state==1?"tongxunlu2":"tongxunlu"} style={[this.styles.icon,{color:this.props.state==1?"#1aac19":"#727274"}]}/>
                     <Text style={[this.styles.text,{color:this.props.state==1?"#1aac19":"#727274"}]}>通讯录</Text>
                  </View>
               </TouchableOpacity>
               <TouchableOpacity onPressIn={() => {this.props.go(2);}} style={{flex :1}}>
                  <View style={this.styles.navFrame}>
                     <Icon name={this.props.state==2?"faxian2":"faxian"} style={[this.styles.icon,{color:this.props.state==2?"#1aac19":"#727274"}]}/>
                     <Text style={[this.styles.text,{color:this.props.state==2?"#1aac19":"#727274"}]}>发现</Text>
                  </View>
               </TouchableOpacity>
               <TouchableOpacity onPressIn={() => {this.props.go(3);}} style={{flex :1}}>
                  <View style={this.styles.navFrame}>
                     <Icon name={this.props.state==3?"wo2":"wo"} style={[this.styles.icon,{color:this.props.state==3?"#1aac19":"#727274"}]}/>
                     <Text style={[this.styles.text,{color:this.props.state==3?"#1aac19":"#727274"}]}>我</Text>
                  </View>
               </TouchableOpacity>
            </View>
         );
   }
}

export default Nav;