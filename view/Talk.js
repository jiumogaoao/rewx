import React from 'react';
import {
   AppRegistry,
   Text,
   Button,
   View,
} from 'react-native';

import TalkFoot from '../modules/TalkFoot';

class Talk extends React.Component {
   static navigationOptions = ({ navigation }) => {
      const {state, setParams} = navigation;
      const {data} = state.params;
      return {
         title: data,
         headerRight: (
            <Button
               title={data}
               onPress={() => setParams({ data: 'b'})}
            />
         ),
      };
   };
   render() {
      return (
         <View style={{flex : 1,flexDirection : 'column',justifyContent : 'space-between'}}>
            <View style={{flex : 1}}>
              <SvgPic w={100} h={100} s={1.2}/>
            </View>
            <TalkFoot/>
         </View>
      );
   }
}

export default Talk;