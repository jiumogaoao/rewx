import React from 'react';
import {
   Text,
   Button,
   View,
   StatusBar,
   SectionList,
   Image,
   StyleSheet,
   TextInput,
   TouchableOpacity
} from 'react-native';
import Cell from '../modules/Cell';
import ListHead from '../modules/ListHead';
import Icon from 'react-native-vector-icons-iconfont/IconFont';
var ImagePicker = require('react-native-image-picker');
var pic=[];
var dsc="";
var that=null;
class AddZoneFrame extends React.Component {
   constructor(props) {
        super(props);
        this.styles = StyleSheet.create({
  icon:{
    width:parseInt(45*w),
    height:parseInt(50*w),
    textAlign:'center',
    fontSize:parseInt(42*w),
    lineHeight:parseInt(42*w),
    marginTop:parseInt(16*w),
    marginLeft:parseInt(5*w),
    color:'#8a8a8a'
  }
})
        this.state={
         pic:this.props.pic
        }
        pic=this.state.pic;
     }
   
   getPic(){
      var rArry=[]
      this.state.pic.forEach((v)=>{rArry.push(<Image source={{uri:v.url}} style={{width:parseInt(152*w),height:parseInt(152*w),marginRight:parseInt(10*w),marginBottom:parseInt(10*w)}}/>)})
      return rArry;
   }
   addPic(){
      ImagePicker.showImagePicker({
                          title: '上传图片',
                          takePhotoButtonTitle:'拍摄照片',
                          chooseFromLibraryButtonTitle:'从相册选择图片',
                          storageOptions: {
                            skipBackup: true,
                            path: 'images'
                          }
                        }, (response) => {

                          console.log(response);

                          if (response.didCancel) {
                            console.log('User cancelled image picker');
                          }
                          else if (response.error) {
                            console.log('ImagePicker Error: ', response.error);
                          }
                          else if (response.customButton) {
                            console.log('User tapped custom button: ', response.customButton);
                          }
                          else {
                            let source = { uri: response.uri };

                            // You can also display the image using data:
                            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                            this.state.pic.push({url:response.uri})
                            this.setState({pic:this.state.pic})
                          }    
                        });
   }
   render(){
      return (<View style={{backgroundColor:'#fff'}}>
         <View style={{width:parseInt(690*w),marginLeft:'auto',borderBottomWidth:1,borderBottomColor:'#e6e6e6'}}>
            <TextInput multiline={true} underlineColorAndroid='transparent' placeholder='这一刻的想法...' style={{height:parseInt(180*w)}} onChangeText={(text)=>{dsc=text}}/>
            <View style={{flexDirection:'row',flexWrap: 'wrap'}}>
               {this.getPic()}
               <View style={{width:parseInt(152*w),height:parseInt(152*w),borderWidth:1,borderColor:'#d6d6d6'}}>
                  <TouchableOpacity onPress={()=>{
                     this.addPic()
                  }}>
                  <Icon name="tianjia" style={{textAlign:'center',fontSize:parseInt(70*w),lineHeight:parseInt(95*w),height:parseInt(130*w)}}/>
                  </TouchableOpacity>
               </View>
            </View>
            
         </View>
         <Cell deg={true}  name='所在位置' other={(<Icon name="weizhi" style={[this.styles.icon]}/>)} go={()=>{}}/>
         </View>)
   }
}
class AddZone extends React.Component {
   constructor(props) {
        super(props);
        this.styles = StyleSheet.create({
  icon:{
    width:parseInt(45*w),
    height:parseInt(50*w),
    textAlign:'center',
    fontSize:parseInt(42*w),
    lineHeight:parseInt(42*w),
    marginTop:parseInt(16*w),
    marginLeft:parseInt(5*w),
    color:'#8a8a8a'
  }
})
     }

   static navigationOptions = ({ navigation }) => {
      const {state, setParams} = navigation;
      const isInfo = state.params.mode === 'info';
      const {user} = state.params;
      return {
         title: '发送朋友圈',
         headerRight: (
            <TouchableOpacity onPress={()=>{
               navigation.state.params.callback({pic:pic,dsc:dsc})
              navigation.goBack();
            }}>
            <Text style={{color:'#23de09',fontSize:parseInt(35*w),top:0,right:parseInt(30*w),width:parseInt(100*w)}}>发送</Text>
          </TouchableOpacity>
         ),
      };
   };

   render() {
      return (
         <View>
            <StatusBar backgroundColor="#000"/>
            <SectionList
     renderItem={({item}) => <Cell deg={true}  name={item.name} other={item.other} dsc={item.dsc} go={item.go}/>}
     renderSectionHeader={({section}) => section.key!='A'?(<ListHead a=" "/>):null}
     sections={[ // 不同section渲染相同类型的子组件
       {data: [{pic:[{url:this.props.navigation.state.params.pic}],callback:this.props.navigation.state.params.callback}], key: 'A',renderItem:({item})=><AddZoneFrame pic={item.pic}/>},
     {data: [
      {name:"谁可以看", key: 'B',dsc:'公开',other:(<Icon name="diqiu" style={[this.styles.icon]}/>),go:()=>{}},
      {name:"提醒谁看", key: 'BB',dsc:'',other:(<Icon name="a" style={[this.styles.icon]}/>),go:()=>{}}
      ], key: 'B'}
   ]}
   />
         </View>
      );
   }
}

export default AddZone;