import React, { Component } from 'react';
import { View, Text,Image,StyleSheet,ScrollView,TouchableOpacity, Linking } from 'react-native';
class Details extends Component {
    state = {
        title: this.props.route.params.user.name,
        image : this.props.route.params.user.image,
        des : this.props.route.params.user.description,
    };
    render() {
        const {title} = this.state;
        const {image} = this.state;
        const {des} = this.state;
    return (
        
      <View style={{backgroundColor:'white',flex:1}}>
        <Image source={{uri: image}} 
        style={{width:'100%',height:250}}/>
        <ScrollView>
        <Text style={{justifyContent:'center',alignItems:'center',paddingTop:10,fontWeight:'bold',paddingLeft:150,fontSize:24,color:'black'}}> {title} </Text>
        <Text style={styles.title}>About the Company</Text>
        <Text style={styles.container}>{des}</Text>
        <Text style={styles.title}>Skills Required</Text>
        <TouchableOpacity onPress={ () =>{Linking.openURL('https://www.java.com/en/')} }>
      <View style={{flexDirection:'row'}}>
      <Text  style={{paddingLeft:100,fontSize:17,color:'black'}}>{'\u2B24'}</Text>
      <Text style={{paddingLeft:10,fontSize:20,color:'black'}}>Java</Text>
      </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={ () =>{Linking.openURL('https://www.w3schools.com/cpp/cpp_intro.asp')} }>
      <View style={{flexDirection:'row'}}>
      <Text  style={{paddingLeft:100,fontSize:17,color:'black'}}>{'\u2B24'}</Text>
      <Text style={{paddingLeft:10,fontSize:20,color:'black'}}>C++</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={ () =>{Linking.openURL('https://www.w3schools.com/c/c_intro.php')} }>
      <View style={{flexDirection:'row'}}>
      <Text  style={{paddingLeft:100,fontSize:17,color:'black'}}>{'\u2B24'}</Text>
      <Text style={{paddingLeft:10,fontSize:20,color:'black'}}>C</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={ () =>{Linking.openURL('https://www.python.org/')} }>
      <View style={{flexDirection:'row'}}>
      <Text  style={{paddingLeft:100,fontSize:17,color:'black'}}>{'\u2B24'}</Text>
      <Text style={{paddingLeft:10,fontSize:20,color:'black'}}>Python</Text>
      </View>
      </TouchableOpacity>
      <Text style={styles.title}>Hiring Process:</Text>
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
          <Text style={{alignSelf:'center',paddingTop:10,color:'white',fontWeight:'bold'}}>Technical HR</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{width:150,height:50,backgroundColor:'#fc8803',alignSelf:'center',borderRadius:15}}>
          <Text style={{alignSelf:'center',paddingTop:10,color:'white',fontWeight:'bold'}}>Personal HR</Text>
          </View>
      </TouchableOpacity>
      </View>
        </ScrollView>
      </View>
    );
}
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        paddingTop: 10,
        marginLeft:15,
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        color:'black',
        fontSize:18,
        marginLeft:15,
        marginRight:15,
        paddingTop:10,

    }
});

export default Details;