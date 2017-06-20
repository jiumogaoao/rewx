import React from 'react';
import {
   View
} from 'react-native';

import Icon from 'react-native-vector-icons-iconfont/IconFont';
import Nav from '../modules/Nav';
class Index extends React.Component {
	static navigationOptions = {
		tabBarLabel: '微信'
	}
   
   render() {
      return (
         <View style={{flex : 1,flexDirection : 'column',justifyContent : 'space-between'}}>
            <View style={{flex : 1,backgroundColor:'red'}}/>
            <Nav />
         </View>
         );
   }
}

export default Index;