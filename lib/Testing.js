import React, { Component } from 'react';
import { View, Text,Image, TouchableOpacity, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Testing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    var img = [];
    for(let i=0;i<15;i++){   
        img.push(
            <View style={{alignContent:'center',justifyContent:'center',backgroundColor:'black'}}>
            <TouchableOpacity style={{width:375,height:275,backgroundColor:'green',marginBottom:20,borderTopLeftRadius:35,borderRadius:35}}>
                <ImageBackground source = {{uri : 'https://img.indiaforums.com/person/640x480/1/2910-sayesha-saigal.jpg'}} 
                style={{resizeMode:'cover',width:375,height:225}}/>
                <TouchableOpacity style={{width:375,height:50,alignContent:'center'}} >
                    <Text style={{alignItems:'center',justifyContent:'center',paddingLeft:170}}>Hello</Text>
                </TouchableOpacity>
        </TouchableOpacity>
        </View>
        )
    }
    return (
      <View>
        <ScrollView>
            {img}
        </ScrollView>
      </View>
    );
  }
}
