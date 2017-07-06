import React from 'react';
import {
   AppRegistry,
   Text,
   Button,
   View,
   StyleSheet,
   Dimensions
} from 'react-native';


class MapV extends React.Component {

   constructor() {
    super();


  }

  componentDidMount() {
  }

   render() {
      return (
         <View style={styles.container}>

      </View>
      );
   }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    height: 40
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 200,
    marginBottom: 16
  }
});

export default MapV;