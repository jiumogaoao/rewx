import React from 'react';
import {
   View,
   Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  Vibration
} from 'react-native';
import Camera from 'react-native-camera';

class Picture extends React.Component {

   constructor(props) {
        super(props);
        this.camera = null;
        this.state = {

        }
        this.transCode='';
    }



   render() {
      return (
          <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>
      </View>
      );
   }
   barcodeReceived(e) {

        if (e.data !== this.transCode) {
            Vibration.vibrate([0, 500, 200, 500]);
            this.transCode = e.data; // 放在this上，防止触发多次，setstate有延时
            this.props.navigation.state.params.callback(e.data)
            this.props.navigation.goBack();
        }
    }
   takePicture() {
    const options = {};
    //options.location = ... 
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
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