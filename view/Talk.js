import React from 'react';
import {
   AppRegistry,
   Text,
   Button,
   View,
} from 'react-native';

import TalkFoot from '../modules/TalkFoot';
import ZuoShang from '../svg/ZuoShang';
import YouShang from '../svg/YouShang';
import ZuoXia from '../svg/ZuoXia';
import YouXia from '../svg/YouXia';
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
               <ZuoShang w={8} h={24} s={0.5}/>
               <ZuoXia w={8} h={13} s={0.5}/>
               <YouShang w={8} h={24} s={0.5}/>
               <YouXia w={8} h={13} s={0.5}/>
            </View>
            <TalkFoot/>
         </View>
      );
   }
}

export default Talk;