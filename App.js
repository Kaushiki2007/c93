import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/Login";
import LogoutScreen from "./screens/Logout";
import ProfileScreen from "./screens/Profile";
import AdvanceScreen from "./screens/advance";
import BasicsScreen from "./screens/basics";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import db from './config';

const Stack = createStackNavigator();
/*  */

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      Questions : [],
      Answers : []
    }
  }

 componentDidMount(){
   db.ref('Questions').on('value',(data)=>{
     data.val().map(d => {this.setState({Questions : [...this.state.Questions,d]})})
   })
   db.ref('Answers').on('value',(data)=>{
     data.val().map(d => {this.setState({Answers : [...this.state.Answers,d]})})
   })
 }

  render(){
    return(
      <NavigationContainer>

       <Stack.Navigator initialRouteName="Home" screenOptions = {{headerShown : false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Logout" component={LogoutScreen} />
          <Stack.Screen name = "Profile" component = {ProfileScreen}/>
          <Stack.Screen name = "advance" component = {AdvanceScreen}/>
          <Stack.Screen name = "basics" component = {BasicsScreen}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
  }
}