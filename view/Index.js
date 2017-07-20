import React from 'react';
import {
   View,
   Button,
   Text,
   TouchableOpacity,
   StatusBar
} from 'react-native';
import Display from 'react-native-display';
import Nav from '../modules/Nav';
import WeiXing from '../view/WeiXing';
import AddressList from '../view/AddressList';
import Found from '../view/Found';
import Mine from '../view/Mine';
import Icon from 'react-native-vector-icons-iconfont/IconFont';
import { NavigationActions } from 'react-navigation'

var d=null;
class Index extends React.Component {

   constructor(props) {
       super(props);
       this.state = { page: 0 ,weiXingPop:false};
       d=this;
     };
   static navigationOptions = ({ navigation }) => {
      const  pageName= ["微信","通讯录","发现","我"];
      var rbutton=null;
      if(!navigation.state.params||navigation.state.params.page==0){
        rbutton=(
          <TouchableOpacity onPress={()=>{
            d.setState({weiXingPop:!d.state.weiXingPop})
          }}>
            <Icon name="jia" style={{color:'#fff',fontSize:parseInt(35*w),top:-parseInt(30*w),right:parseInt(0*w),width:parseInt(40*w)}}/>
          </TouchableOpacity>
         )
      }else if(navigation.state.params.page==1){
        rbutton=(
          <TouchableOpacity>
            <Icon name="jiahaoyou" style={{color:'#fff',fontSize:parseInt(35*w),top:-parseInt(30*w),right:parseInt(0*w),width:parseInt(40*w)}}/>
          </TouchableOpacity>  
         )
      }
      return {
         title: navigation.state.params?pageName[navigation.state.params.page]:pageName[0],
         headerRight:rbutton
      };
   };
   pageChange(num) {  
     this.setState({  
       page: num,
       weiXingPop:false
     }) 
     this.props.navigation.setParams({page: num})
   }
   cancelWeiXingPop(){
      this.setState({weiXingPop:false})
   }
   render() {
      console.log(this.props.navigation.state.params)
      let page=this.state.page
      return (
         <View style={{flex : 1,flexDirection : 'column',justifyContent : 'space-between'}}>
            <StatusBar backgroundColor="#000"/>
            <View style={{flex : 1}}>
               {this.state.page==0?(<WeiXing navigation={this.props.navigation} go={(data)=>{this.setState({weiXingPop:false});this.props.navigation.navigate('Talk', {data: data})}} pop={this.state.weiXingPop} cancelPop={this.cancelWeiXingPop}/>):null}
               {this.state.page==1?(
                  <AddressList navigation={this.props.navigation}/>):null
               }
               {this.state.page==2?(
                  <Found navigation={this.props.navigation}/>):null
               }
               {this.state.page==3?(
                  <Mine navigation={this.props.navigation}/>):null
               }
            </View>
            <Nav go={(num) =>this.pageChange(num)} state={this.state.page}/>
         </View>
         );
   }
}

export default Index;