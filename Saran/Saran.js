import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

export default class Saran extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    // let Saran = [];
    // for(let i=0;i<50;i++){
    //   Saran.push(
    //   <Image source={require('./assets/Pro.jpg')} style={{flex:1,backgroundColor:'black',borderTopRightRadius:40,borderBottomLeftRadius:40,width:170}}/>
    //   );
    // }
    return (
      <View style={sty.tes}>
        {/* <Text> Saran </Text>
        <TextInput placeholder='Lass'></TextInput> 
        <ScrollView></ScrollView>*/}
      </View>
    );
  }
}
const sty = ({
    tes:{
        backgroundColor:'red',
        color:'white',
        fontSize:20,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }

})