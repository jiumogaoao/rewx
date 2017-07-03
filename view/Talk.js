import React from 'react';
import {
   AppRegistry,
   Text,
   Button,
   View,
   Image,
   SectionList
} from 'react-native';

import TalkFoot from '../modules/TalkFoot';
import TalkCell from '../modules/TalkCell';
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
<SectionList
              renderItem={({item}) => <TalkCell from={item.from} img={item.img} face={item.face} text={item.text}/>}
              renderSectionHeader={({section}) => <Text style={{textAlign:"center",backgroundColor:"rgba(0,0,0,0.1)",width:80,height:30,lineHeight:25,marginLeft:"auto",marginRight:"auto",marginTop:10,borderRadius:10}}>{section.time}</Text>}
              sections={[
                {data: [{name:"a", key: 'A',from:0,text:"dsdsfd"},{name:"a", key: 'AA',from:1,text:"dsdsfd",face:3}], key: 'A',time:"10:00"},
                {data: [{name:"a", key: 'A',from:1,text:"dsdsfd",img:"ee"},{name:"a", key: 'AA',from:0,text:"dsdsfd"}], key: 'B',time:"10:00"},
                {data: [{name:"a", key: 'A',from:0,text:"dsdsfd",face:9},{name:"a", key: 'AA',from:1,text:"dsdsfd",img:"eee"}], key: 'C',time:"10:00"}
              ]}
            />
            </View>
            <TalkFoot faceClick={(num)=>{console.log(num)}} say={(data)=>{console.log(data)}} write={(data)=>{console.log(data)}} pic={(data)=>{console.log(data)}} video={(data)=>{console.log(data)}} place={(data)=>{console.log(data)}}/>
         </View>
      );
   }
}

export default Talk;