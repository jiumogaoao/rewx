import React from 'react';
import {
   AppRegistry,
   Text,
   Button,
   View,
} from 'react-native';

class Mine extends React.Component {
	static navigationOptions = {
		tabBarLabel: '我'
	}
   render() {
      return (<View>
         <Text>List of all contacts</Text>
         <Button onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })} title="Chat with Lucy"  />
      </View>);
   }
}

export default Mine;