import React from 'react';
import { Text, View, Stylesheet, TouchableOpacity, Linking } from 'react-native';

export default class AdvanceScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View> <TouchableOpacity style = {{marginTop:100}}onPress={()=>{Linking.openURL('https://soenglish.me/books-to-learn-english/')}}> <Text> Press here to read the best books... </Text></TouchableOpacity> </View>
      </View>
    );
  }
}
