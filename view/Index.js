import React from 'react';
import {
   View,
   Button,
   Text,
   TouchableOpacity
} from 'react-native';
import Display from 'react-native-display';
import Nav from '../modules/Nav';
import WeiXing from '../view/WeiXing';
import AddressList from '../view/AddressList';
import Found from '../view/Found';
import Mine from '../view/Mine';
import Icon from 'react-native-vector-icons-iconfont/IconFont';
import { NavigationActions } from 'react-navigation'
class Index extends React.Component {
   constructor(props) {
       super(props);
       this.state = { page: 0 ,weiXingPop:false};
     }
   static navigationOptions = ({ navigation }) => {
      console.log(this)
      const  pageName= ["微信","通讯录","发现","我"];
      var rbutton=null;
      if(!navigation.state.params||navigation.state.params.page==0){
        rbutton=(
          <TouchableOpacity onPress={()=>{
            console.log(navigation)
            //this.setState({weiXingPop:!this.state.weiXingPop})
          }}>
            <Icon name="jia" style={{color:'#fff',fontSize:25,top:-25,right:0,width:40}}/>
          </TouchableOpacity>
         )
      }else if(navigation.state.params.page==1){
        rbutton=(
          <TouchableOpacity>
            <Icon name="jiahaoyou" style={{color:'#fff',fontSize:25,top:-25,right:0,width:40}}/>
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
       page: num 
     }) 
     this.props.navigation.setParams({page: num})
   }
   cancelWeiXingPop(){
      this.setState({weiXingPop:false})
   }
   render() {
      let page=this.state.page
      return (
         <View style={{flex : 1,flexDirection : 'column',justifyContent : 'space-between'}}>
            <View style={{flex : 1}}>
               <Display enable={this.state.page==0} keepAlive={true} style={{flex : 1}}>
                  <WeiXing go={(data)=>this.props.navigation.navigate('Talk', {data: data})} pop={this.state.weiXingPop} cancelPop={this.cancelWeiXingPop}/>
               </Display>
               <Display enable={this.state.page==1} keepAlive={true} style={{flex : 1}}>
                  <AddressList/>
               </Display>
               <Display enable={this.state.page==2} keepAlive={true} style={{flex : 1}}>
                  <Found/>
               </Display>
               <Display enable={this.state.page==3} keepAlive={true} style={{flex : 1}}>
                  <Mine/>
               </Display>
            </View>
            <Nav go={(num) =>this.pageChange(num)} state={this.state.page}/>
         </View>
         );
   }
}

export default Index;