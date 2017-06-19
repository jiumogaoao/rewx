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
   render() {
      return (<Icon name="biaoqing" size={30} color="#900" />);
   }
}

export default Index;