import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style = {styles.button1}
          onPress={() => this.props.navigation.navigate('advance')}>
          <Text style = {styles.buttontxt}> Advanced Level </Text>
        </TouchableOpacity>

 
         <TouchableOpacity style = {styles.button2}
          onPress={() => this.props.navigation.navigate('basics')}>
          <Text style = {styles.buttontxt}> Basic </Text>
        </TouchableOpacity>
      </View>
      
    );
  }
}
 const styles = StyleSheet.create({
    container: {
    flex: 1,
  },
  button1: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    backgroundColor: 'white',
    borderRadius: 30,
  },
  button2: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    backgroundColor: 'white',
    borderRadius: 30,
  },
  buttontxt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    paddingLeft: 10,
  },
 });