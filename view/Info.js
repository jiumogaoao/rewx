import React from 'react';
import {
   AppRegistry,
   Text,
   Button,
   View
} from 'react-native';

class Info extends React.Component {
   static navigationOptions = ({ navigation }) => {
      const {state, setParams} = navigation;
      const isInfo = state.params.mode === 'info';
      const {user} = state.params;
      return {
         title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
         headerRight: (
            <Button
               title={isInfo ? 'Done' : `${user}'s info`}
               onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
            />
         ),
      };
   };
   render() {
      return (
         <View>
            <Text>Chat with Lucy</Text>
         </View>
      );
   }
}

export default Info;