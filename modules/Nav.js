import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons-iconfont/IconFont';

class Nav extends Component {
   constructor(props) {
       super(props);
       this.state = { page: 0 };
     }
   render() {
    const styles = StyleSheet.create({
  navFrame: {
   flex:1,
   flexDirection : 'column',
   justifyContent : 'space-around'
  },
  icon:{
   lineHeight:parseInt(45*w),
   textAlign:'center',
   fontSize:parseInt(45*w),
   height:parseInt(50*w)
  },
  text:{
   textAlign:'center'
  }
});
    console.log(w)
      return (
            <View style={{height : parseInt(100*w),flexDirection:'row',justifyContent : 'space-between'}}>
               <TouchableHighlight onPress={() => {this.props.go(0);}} style={{flex :1,flexDirection : 'column'}}>
                  <View style={styles.navFrame}>
                     <Icon name={this.props.state==0?"qipao":"qipao2"} style={[styles.icon,{color:this.props.state==0?"green":"#000"}]}/>
                     <Text style={styles.text}>微信</Text>
                  </View>
               </TouchableHighlight>
               <TouchableHighlight onPress={() => {this.props.go(1);}} style={{flex :1}}>
                  <View style={styles.navFrame}>
                     <Icon name={this.props.state==1?"tongxunlu2":"tongxunlu"} style={[styles.icon,{color:this.props.state==1?"green":"#000"}]}/>
                     <Text style={styles.text}>通讯录</Text>
                  </View>
               </TouchableHighlight>
               <TouchableHighlight onPress={() => {this.props.go(2);}} style={{flex :1}}>
                  <View style={styles.navFrame}>
                     <Icon name={this.props.state==2?"faxian2":"faxian"} style={[styles.icon,{color:this.props.state==2?"green":"#000"}]}/>
                     <Text style={styles.text}>发现</Text>
                  </View>
               </TouchableHighlight>
               <TouchableHighlight onPress={() => {this.props.go(3);}} style={{flex :1}}>
                  <View style={styles.navFrame}>
                     <Icon name={this.props.state==3?"wo2":"wo"} style={[styles.icon,{color:this.props.state==3?"green":"#000"}]}/>
                     <Text style={styles.text}>我</Text>
                  </View>
               </TouchableHighlight>
            </View>
         );
   }
}

export default Nav;