import React from 'react';
import {
   View
} from 'react-native';
import Display from 'react-native-display';
import Nav from '../modules/Nav';
import WeiXing from '../view/WeiXing';
import AddressList from '../view/AddressList';
import Found from '../view/Found';
import Mine from '../view/Mine';
class Index extends React.Component {
   constructor(props) {
       super(props);
       this.state = { page: 1 };
     }
   pageChange(num) {  
     this.setState({  
       page: num 
     })  
   }
   render() {
      let page=this.state.page
      return (
         <View style={{flex : 1,flexDirection : 'column',justifyContent : 'space-between'}}>
            <View style={{flex : 1}}>
               <Display enable={this.state.page==0} keepAlive={true} style={{flex : 1}}>
                  <WeiXing go={(data)=>this.props.navigation.navigate('Talk', {data: data})}/>
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
            <Nav goWX={() =>this.pageChange(0)} goTXL={()=>this.pageChange(1)} goFX={()=>this.pageChange(2)} goW={()=>this.pageChange(3)}/>
         </View>
         );
   }
}

export default Index;