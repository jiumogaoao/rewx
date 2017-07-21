import React from 'react';
import {
   AppRegistry,
   Text,
   Button,
   View,
   Image,
   SectionList,
   TouchableOpacity,
   StatusBar
} from 'react-native';

import TalkFoot from '../modules/TalkFoot';
import TalkCell from '../modules/TalkCell';
import Icon from 'react-native-vector-icons-iconfont/IconFont';

Date.prototype.Format = function(fmt)  
{ //author: meizz  
    var o = {  
        "M+" : this.getMonth()+1,                 //月份  
        "d+" : this.getDate(),                    //日  
        "h+" : this.getHours(),                   //小时  
        "m+" : this.getMinutes(),                 //分  
        "s+" : this.getSeconds(),                 //秒  
        "q+" : Math.floor((this.getMonth()+3)/3), //季度  
        "S"  : this.getMilliseconds()             //毫秒  
    };  
    if(/(y+)/.test(fmt))  
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));  
    for(var k in o)  
        if(new RegExp("("+ k +")").test(fmt))  
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));  
    return fmt;  
}; 

class Talk extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      list:[{data: [{name:"a", key: 'A',from:0,text:"dsdsfd"},{name:"a", key: 'AA',from:1,text:"dsdsfd",face:3}], key: 'A',time:"10:00"},
                {data: [{name:"a", key: 'A',from:1,text:"dsdsfd",img:"https://facebook.github.io/react/img/logo_og.png",width:200,height:200},{name:"a", key: 'AA',from:0,text:"dsdsfd"}], key: 'B',time:"10:00"},
                {data: [{name:"a", key: 'A',from:0,text:"dsdsfd",face:9},{name:"a", key: 'AA',from:0,text:"dsdsfd",img:"https://facebook.github.io/react/img/logo_og.png",width:200,height:200}], key: 'C',time:"10:00"}],
      sound:false
    }
  }
   static navigationOptions = ({ navigation }) => {
      const {state, setParams} = navigation;
      const {data} = state.params;
      return {
         title: data,
         headerRight: (
            <TouchableOpacity onPress={()=>{}}>
            <Icon name="wo2" style={{color:'#fff',fontSize:parseInt(35*w),top:-parseInt(30*w),right:parseInt(0*w),width:parseInt(40*w)}}/>
          </TouchableOpacity>
         )

      };
   };
   render() {
      
      return (
         <View style={{flex : 1,flexDirection : 'column',justifyContent : 'space-between'}}>
         <StatusBar backgroundColor="#000"/>
            <View style={{flex : 1}}>
<SectionList
              renderItem={({item}) => <TalkCell data={item}/>}
              renderSectionHeader={({section}) => <Text style={{backgroundColor:"#cccccc",color:'#fff',textAlign:'center',fontSize:parseInt(18*w),lineHeight:parseInt(28*w),width:parseInt(80*w),borderRadius:parseInt(10*w),marginLeft:'auto',marginRight:'auto',marginTop:parseInt(10*w),marginBottom:parseInt(10*w)}}>{section.time}</Text>}
              sections={this.state.list}
            />
            </View>
            <TalkFoot addData={(data)=>{
              let list=this.state.list;
              if(list.length&&list[list.length-1].time==(new Date()).Format("mm:ss")){
                list[list.length-1].data.push(data)
              }else{
                list.push({data: [data], key: 'id_'+new Date().getTime(),time:(new Date()).Format("mm:ss")})
              }
              this.setState({list:list});
            }} sound={(data)=>{this.setState({sound:data})}} navigation={this.props.navigation}/>
            {this.state.sound?(<View style={{position: 'absolute',top:parseInt(300*w),left:parseInt(((720-300)/2)*w),width:parseInt(300*w),height:parseInt(300*w),backgroundColor:'rgba(0,0,0,0.2)',zIndex:30}}>
              <Icon name="yingping" style={{color:'#fff',textAlign:'center',fontSize:parseInt(150*w),lineHeight:parseInt(200*w)}}/>
            </View>):null}
         </View>
      );
   }
}

export default Talk;