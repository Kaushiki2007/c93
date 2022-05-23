import React from 'react';
import { Text, View, Stylesheet } from 'react-native';
import db from '../config';

export default class BasicsScreen extends React.Component {
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
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <View> <Text> Questions </Text> {this.state.Questions.map(item=>{return(<Text> {item} </Text>)})} </View>
      </View>
    );
  }
}
