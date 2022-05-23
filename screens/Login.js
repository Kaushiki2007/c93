import React from 'react';
import { Text, View, Stylesheet } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import * as Google from "expo-google-app-auth";
import firebase from "firebase";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> LoginScreen </Text>
      </View>
    );
  }
}
