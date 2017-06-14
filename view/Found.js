import React from 'react';
import {
   AppRegistry,
   Text,
   Button,
   View,
} from 'react-native';

class Found extends React.Component {
	static navigationOptions = {
		tabBarLabel: '发现'
	}
   render() {
      return (<View>
         <Text>List of all contacts</Text>
         <Button onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })} title="Chat with Lucy"  />
      </View>);
   }
}
export default Found;