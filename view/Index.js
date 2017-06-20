import React from 'react';
import {
   AppRegistry,
   Text,
   Button,
   View,
} from 'react-native';

import Icon from 'react-native-vector-icons-iconfont/IconFont';

class Index extends React.Component {
	static navigationOptions = {
		tabBarLabel: '微信'
	}

   _onPressButton() {
    console.log("You tapped the button!");
  }
   
   render() {
      return (
         <View style={{flex : 1,flexDirection : 'column',justifyContent : 'space-between'}}>
            <View style={{flex : '1',backgroundColor:'red'}}/>
            <View style={{height = '100',backgroundColor = 'green',flexDirection:'row'}}>
               <TouchableHighlight onPress={this._onPressButton}>
                  <View style={styles.navFrame}>
                     <Icon name="qipao" size={30} color="#900" />
                     <Text>微信</Text>
                  </View>
               </TouchableHighlight>
               <TouchableHighlight onPress={this._onPressButton}>
                  <View style={styles.navFrame}>
                     <Icon name="tongxunlu" size={30} color="#900" />
                     <Text>通讯录</Text>
                  </View>
               </TouchableHighlight>
               <TouchableHighlight onPress={this._onPressButton}>
                  <View style={styles.navFrame}>
                     <Icon name="faxian" size={30} color="#900" />
                     <Text>发现</Text>
                  </View>
               </TouchableHighlight>
               <TouchableHighlight onPress={this._onPressButton}>
                  <View style={styles.navFrame}>
                     <Icon name="wo" size={30} color="#900" />
                     <Text>我</Text>
                  </View>
               </TouchableHighlight>
            </View>
         </View>
         );
   }
}
const styles = StyleSheet.create({
  navFrame: {
   flex:1,
   flexDirection : 'column',
   justifyContent : 'space-between'
  }
});
export default Index;