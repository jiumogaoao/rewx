import React, { Component } from 'react';
import {
   Text,
   View,
   StyleSheet,
   TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons-iconfont/IconFont';

class Nav extends Component {
   
   render() {
      return (
            <View style={{height : 100,flexDirection:'row',justifyContent : 'space-between'}}>
               <TouchableHighlight onPress={() => this.props.navigation.navigate('Index', {})} style={{flex :1,flexDirection : 'column'}}>
                  <View style={styles.navFrame}>
                     <Icon name="qipao" style={styles.icon}/>
                     <Text style={styles.text}>微信</Text>
                  </View>
               </TouchableHighlight>
               <TouchableHighlight onPress={() => this.props.navigation.navigate('AddressList', {})} style={{flex :1}}>
                  <View style={styles.navFrame}>
                     <Icon name="tongxunlu" style={styles.icon}/>
                     <Text style={styles.text}>通讯录</Text>
                  </View>
               </TouchableHighlight>
               <TouchableHighlight onPress={() => this.props.navigation.navigate('Found', {})} style={{flex :1}}>
                  <View style={styles.navFrame}>
                     <Icon name="faxian" style={styles.icon}/>
                     <Text style={styles.text}>发现</Text>
                  </View>
               </TouchableHighlight>
               <TouchableHighlight onPress={() => this.props.navigation.navigate('Mine', {})} style={{flex :1}}>
                  <View style={styles.navFrame}>
                     <Icon name="wo" style={styles.icon}/>
                     <Text style={styles.text}>我</Text>
                  </View>
               </TouchableHighlight>
            </View>
         );
   }
}
const styles = StyleSheet.create({
  navFrame: {
   flex:1,
   flexDirection : 'column',
   justifyContent : 'space-around'
  },
  icon:{
   lineHeight:50,
   textAlign:'center',
   fontSize:40,
   color:"#000"
  },
  text:{
   textAlign:'center'
  }
});
export default Nav;