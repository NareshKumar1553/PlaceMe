import React, { Component } from 'react';
import { View, Text,StyleSheet,Image, TextInput, ScrollView, TouchableOpacity,Button,Linking } from 'react-native';

class Saran extends Component{
    state = {
        title: this.props.route.params.user.name,
        image : this.props.route.params.user.image,
        des : this.props.route.params.user.description,
    };
    render(){
        const {title} = this.state;
        const {image} = this.state;
        const {des} = this.state;
      return (
     <View style={{flex:1}} >
    
      <Image source={{uri: image}} style={{width:'100%', height:'25%',alignSelf:'center'}}/>
      <ScrollView>
      <Text style={{alignSelf:'center',color:'blue',paddingTop:40,fontSize:20,fontFamily: 'serif'}}>{title}</Text>
      <Text style={{color:'black',fontWeight:'bold',fontSize:20,paddingLeft:20}}>About:</Text>
      
      <Text style={{paddingLeft:45,fontFamily:'arial',fontSize:15,color:'black'}}>{des}</Text>
      <Text style={{color:'black',fontWeight:'bold',fontSize:20,paddingLeft:20}}>Skill Required:</Text>
      <TouchableOpacity>
      <View style={{flexDirection:'row'}}>
      <Text  style={{paddingLeft:100,fontSize:17,color:'black'}}>{'\u2B24'}</Text>
      <Text style={{paddingLeft:10,fontSize:20,color:'black'}}>Java</Text>
      </View>
       </TouchableOpacity>
       <TouchableOpacity>
      <View style={{flexDirection:'row'}}>
      <Text  style={{paddingLeft:100,fontSize:17,color:'black'}}>{'\u2B24'}</Text>
      <Text style={{paddingLeft:10,fontSize:20,color:'black'}}>C++</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={{flexDirection:'row'}}>
      <Text  style={{paddingLeft:100,fontSize:17,color:'black'}}>{'\u2B24'}</Text>
      <Text style={{paddingLeft:10,fontSize:20,color:'black'}}>C</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={{flexDirection:'row'}}>
      <Text  style={{paddingLeft:100,fontSize:17,color:'black'}}>{'\u2B24'}</Text>
      <Text style={{paddingLeft:10,fontSize:20,color:'black'}}>Python</Text>
      </View>
      </TouchableOpacity>
      <Text style={{color:'black',fontWeight:'bold',fontSize:20,paddingLeft:20}}>Hiring Process:</Text>
      <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
      <TouchableOpacity onPress={ () =>{Linking.openURL('https://www.indiabix.com/online-test/aptitude-test/')} }>
        <View style={{width:150,height:50,backgroundColor:'red',alignSelf:'center',borderRadius:15}}>
          <Text style={{alignSelf:'center',paddingTop:10,color:'white',fontWeight:'bold'}}>Aptitude</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={ () =>{Linking.openURL('https://www.tutorialspoint.com/questions_and_answers.htm')}}>
        <View style={{width:150,height:50,backgroundColor:'green',alignSelf:'center',borderRadius:15}}>
          <Text style={{alignSelf:'center',paddingTop:10,color:'white',fontWeight:'bold'}}>Technical Round</Text>
          </View>
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-evenly',paddingTop:10}}>
      <TouchableOpacity onPress={ () =>{navigation.navigate('inter1')}}>
        <View style={{width:150,height:50,backgroundColor:'blue',alignSelf:'center',borderRadius:15}}>
          <Text style={{alignSelf:'center',paddingTop:10,color:'white',fontWeight:'bold'}}>InterView-1</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{width:150,height:50,backgroundColor:'#fc8803',alignSelf:'center',borderRadius:15}}>
          <Text style={{alignSelf:'center',paddingTop:10,color:'white',fontWeight:'bold'}}>InterView-2</Text>
          </View>
      </TouchableOpacity>
      </View>
      
      </ScrollView>
     </View>
    );
      }
  }
const styles=StyleSheet.create({
  assert:{
    backgroundColor:'white',
   // flex:1,
    color:'white',
   
    alignItems:'center',
  },
  rectangle:{
    color:'blue',
    width:50,
    height:50,
    backgroundColor:'black',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});
export default Saran;