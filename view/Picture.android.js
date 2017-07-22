import React from 'react';
import {
   View,
   Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration
} from 'react-native';
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons-iconfont/IconFont';
class Picture extends React.Component {

   constructor(props) {
        super(props);
        this.camera = null;
        this.state = {
            front:false,
            light:false
        }
        this.styles=StyleSheet.create({
          point:{
            width:parseInt(100*w),
            height:parseInt(100*w),
            borderRadius:parseInt(100*w),
            backgroundColor:'#fff'
          },
          icon:{
            fontSize:parseInt(60*w),
            lineHeight:parseInt(70*w),
            textAlign:'center'
          }
        })
    }



   render() {
      return (
          <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview} type={this.state.front?'front':'back'} torchMode={this.state.light?Camera.constants.TorchMode.on:Camera.constants.TorchMode.off}
          aspect={Camera.constants.Aspect.fill}>
          <View style={{flexDirection:'row',justifyContent:'space-around',width:'100%',marginBottom:parseInt(100*w)}}>
            <View style={this.styles.point}><TouchableOpacity  onPressIn={()=>{this.setState({light:!this.state.light})}}><Icon name="shoudian" style={this.styles.icon}/></TouchableOpacity></View>
            <View style={this.styles.point}><TouchableOpacity  onPressIn={this.takePicture.bind(this)}><Icon name="paise" style={this.styles.icon}/></TouchableOpacity></View>
            <View style={this.styles.point}><TouchableOpacity  onPressIn={()=>{this.setState({front:!this.state.front})}}><Icon name="qianzhi" style={this.styles.icon}/></TouchableOpacity></View>
          </View>
        </Camera>
      </View>
      );
   }
   takePicture() {
    const options = {};
    //options.location = ... 
    this.camera.capture({metadata: options})
      .then((data) => {
        console.warn(JSON.stringify(data));
        this.props.navigation.state.params.callback(data.path);
        this.props.navigation.goBack();
      })
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

export default Picture;